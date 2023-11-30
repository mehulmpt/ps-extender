// @ts-nocheck

export function $(selector) {
	const elems = document.querySelectorAll(selector)
	return elems.length === 1 ? elems[0] : [...elems]
}

export function moveswap(node) {
  const thisPos = parseInt(node.querySelector('#spnRank').innerText)
  const otherPos = parseInt(prompt('Enter station# to swap with'), 10)
  const list = $('#sortable_nav li')
  const otherNode = list[otherPos - 1] // zero based index
  moveSelected([node], otherPos, { preserveSelection: true, recalculateRanks: false })
  moveSelected([otherNode], thisPos, { preserveSelection: true })
}

export function getSelected() {
  return $('#sortable_nav').querySelectorAll('li.selected')
}

/// Get all station li nodes
export function getAllItems() {
  return Array.from(document.querySelectorAll('#sortable_nav > li'))
}

export function moveselectedto() {
  moveSelected(getSelected(), parseInt($('#__PSZY_PREFNO__').value, 10))
}

export function moveselectedtop() {
  moveSelected(getSelected(), 1)
}

export function moveselectedbottom() {
  moveSelected(getSelected(), getAllItems().length)
}

export function moveSelected(selection, to, { preserveSelection = false, recalculateRanks = true } = {}) {
  const listContainer = $('#sortable_nav')
  let list = getAllItems()
  // input validation
  if (selection.length == 0) {
    return alert('Select at least one station')
  }
  if (!Number.isInteger(to) || isNaN(to) || to < 1) {
    return alert('Enter a valid preference number')
  }
  if (to > list.length) {
    return alert('Not enough stations. Try a smaller number')
  }
  // move
  selection.forEach(node => {
    listContainer.removeChild(node)
  })
  list = getAllItems()
  if (to < list.length) {
    const targetNode = list[to - 1] // zero based index
    selection.forEach(node => {
      listContainer.insertBefore(node, targetNode)
    })
  } else {
    selection.forEach(node => {
      listContainer.appendChild(node)
    })
  }
  if (recalculateRanks) correctRanks()
  glow(...selection)
  if (!preserveSelection) deselectAll()
}
function toggleNodeSelection(node) {
  node.closest('#sortable_nav > li')?.classList.toggle('selected')
  updateSelectedCount()
}
function saveEditedNote() {
  const lis = getAllItems()
  lis.forEach(li => {
    if(li.getAttribute("note-editing") == "true"){
      const spn = li.querySelector(".spanclass.uiicon").getAttribute("spn")
      const note = li.querySelector("#__PSZY_NOTE__").innerText
      chrome.storage.local.get(['__PSZY_NOTES__'], (result) => {
        const notes = result.__PSZY_NOTES__
        console.log(notes)
        if (notes) {
          const index = notes.findIndex(n => n.spn == spn)
          if (index >= 0) {
            notes[index].note = note
          } else {
            notes.push({ spn, note })
          }
          chrome.storage.local.set({ __PSZY_NOTES__: notes })
        } else {
          chrome.storage.local.set({ __PSZY_NOTES__: [{ spn, note }] })
        }
      })
      li.removeAttribute("note-editing")
    }
  })
}
export function handleStrayClick(target : HTMLElement) {
  // save the note if a note was being edited
  saveEditedNote()
  // ignore clicks on any interactive element
  if (target.matches('input, a, button')) return
  // else (de)select the item if the click was on a list item
  toggleNodeSelection(target)
}

export function deselectAll() {
  getSelected().forEach(node => node.classList.remove('selected'))
  updateSelectedCount()
}

export function getRange() {
  const ranges = $('#__PSZY_RANGE__').value.split(',')
  const indices = []
  ranges.forEach(r => {
    r = r.trim()
    // matches numbers
    // insensitive to whitespace around number
    const singleNum = r.match(/^(\d+)$/m)
    if (singleNum !== null) {
      indices.push(parseInt(singleNum[1]))
      return
    }
    // matches: 10-22
    // insensitive to whitespace around number
    const numRange = r.match(/^(\d+)\W*-\W*(\d+)$/m)
    if (numRange !== null) {
      const min = parseInt(numRange[1])
      const max = parseInt(numRange[2])
      for (let i = min; i <= max; i++) {
        indices.push(i)
      }
      return
    }
  })
  return indices
}

export function selectRange() {
  const list = getAllItems()
  getRange().forEach(i => {
    // zero based indexing
    list[i - 1].classList.add('selected')
  })
  updateSelectedCount()
}

export function deselectRange() {
  const list = getAllItems()
  getRange().forEach(i => {
    // zero based indexing
    list[i - 1].classList.remove('selected')
  })
  updateSelectedCount()
}

export function getPattern() {
  const pattern = $('#__PSZY_PATTERN__').value
  return new RegExp(pattern, 'im')
}

export function selectPattern() {
  const list = getAllItems()
  const re = getPattern()
  list.forEach(n => {
    const text = n.querySelector('span.spanclass').innerText
    if (re.test(text)) {
      n.classList.add('selected')
    }
  })
  updateSelectedCount()
}

export function deselectPattern() {
  const list = getAllItems()
  const re = getPattern()
  list.forEach(n => {
    const text = n.querySelector('span.spanclass').innerText
    if (re.test(text)) {
      n.classList.remove('selected')
    }
  })
  updateSelectedCount()
}

export function updateSelectedCount() {
  const count = getSelected().length
  $('#__PSZY_SELECTEDCOUNT__').innerText = count.toString()
}

export function moveup(node) {
  const newPos = parseInt(node.previousSibling.querySelector('#spnRank').innerText)
  moveSelected([node], newPos, { preserveSelection: true })
  window.scrollBy({
    top: -1 * node.offsetHeight,
    behavior: 'smooth'
  })
}

export function movedown(node) {
  const newPos = parseInt(node.nextSibling.querySelector('#spnRank').innerText)
  moveSelected([node], newPos, { preserveSelection: true })
  window.scrollBy({
    top: node.offsetHeight,
    behavior: 'smooth'
  })
}

export function movetotop(node) {
  moveSelected([node], 1, { preserveSelection: true })
}

export function movetobottom(node) {
  moveSelected([node], getAllItems().length, { preserveSelection: true })
}

export function moveto(node) {
  const newNodePos = parseInt(prompt('Enter preference#'), 10)
  moveSelected([node], newNodePos, { preserveSelection: true })
}

export function glow(...nodes) {
  nodes.forEach((node) => {
    node.classList.add('glow')
    setTimeout(() => {
      node.classList.remove('glow')
    }, 400)
  })
}

export function correctRanks() {
  $('#sortable_nav > li').forEach((li, index) => {
    li.querySelector('#spnRank').innerText = index + 1
    li.querySelector('span.spanclass').setAttribute('cls', index + 1)
  })
}

export function exportCsv() {
  const list = getAllItems()
  const data = [['ID', 'NAME', 'ACCOMO', 'STIPEND', 'STUDENTS', 'PROJECTS', 'DISCIPLINES', 'NOTES']]
  list.forEach(n => {
    const id = n.querySelector('span.spanclass').getAttribute('spn')
    const name = encodeURIComponent(n.querySelector('span.spanclass').innerText)
    const accomo = Number(n.querySelector('input[type="checkbox"]').checked)
    const stipend = n.querySelector('#__PSZY_STIPEND__ span').innerText
    const students = n.querySelector('#__PSZY_STUDENTS__ span').innerText
    const projects = n.querySelector('#__PSZY_PROJECTS__ span').innerText
    const discipline = encodeURIComponent(n.querySelector('#__PSZY_DISCIPLINE__ span').innerText)
    const notes = encodeURIComponent(n.querySelector('#__PSZY_NOTE__').innerText)
    data.push([id, name, accomo, stipend, students, projects, discipline, notes])
  })
  const blob = new Blob([data.map(row => row.join(',')).join('\n')], { type: 'text/html', endings: 'native' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'station_preferences.csv'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

// read csv line by line
// find station id in pref list
// update row
// add row to doc fragment
// new stations remain in list
// add fragment to top of list
export function importCsv() {
  const picker = $('#__PSZY_FILE__')
  picker.click()
  picker.addEventListener('change', () => {
    picker.files?.[0]?.text().then(text => {
      if (!text.startsWith('ID,NAME,ACCOMO,STIPEND,STUDENTS,PROJECTS,DISCIPLINES,NOTES')) return alert('Bad File')
      // temp store pref in fragment
      const fragment = document.createDocumentFragment();
      const stats = {
        restored: 0,
        added: 0,
        deleted: 0,
      }
      const data = text.trim().split('\n').map(s => s.trim().split(','))
      data.shift() // remove header
      data.forEach(row => {
        const [id, name, accomo, stipend, students, projects, discipline, notes] = row
        const node = $('#sortable_nav').querySelector(`span.spanclass[spn="${id}"]`)?.parentNode
        if (!node) {
          // station withdrawn
          stats.deleted ++
          return
        }
        node.querySelector('input[type="checkbox"]').checked = Number(accomo)
        node.querySelector('#__PSZY_STIPEND__ span').innerText = stipend
        node.querySelector('#__PSZY_STUDENTS__ span').innerText = students
        node.querySelector('#__PSZY_PROJECTS__ span').innerText = projects
        node.querySelector('#__PSZY_DISCIPLINE__ span').innerText = decodeURIComponent(discipline)
        node.querySelector('#__PSZY_NOTE__').innerText = decodeURIComponent(notes)
        stats.restored ++
        fragment.appendChild(node)
      })
      // stations remaining in list were added after backup
      stats.added = document.querySelectorAll('#sortable_nav > li').length
      // add back fragment to the top of this list
      if (stats.added) {
        $('#sortable_nav').insertBefore(fragment, $('#sortable_nav > li:first-child'))
      } else {
        $('#sortable_nav').appendChild(fragment)
      }
      correctRanks()
      alert(`imported ${data.length} rows, ${stats.restored} stations restored from backup, ${stats.added} added and ${stats.deleted} deleted since last visit`)
    })
  })
}

export function viewProblemBank(node, { openInBackground = false, forFetch = false } = {}) {
  let stid = node.querySelector('.spanclass.uiicon').attributes.spn.value
  let fetchBody = { StationId: stid }
  return fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(fetchBody),
    method: "POST",
    mode: "cors",
    credentials: "include"
  })
  .then(response => response.json())
  .then(data => {
    const parsed = JSON.parse(data.d)
    if (parsed.length > 0) {
      const url = `StationproblemBankDetails.aspx?CompanyId=${parsed[0].CompanyId}&StationId=${parsed[0].StationId}&BatchIdFor=${parsed[0].BatchIdFor}&PSTypeFor=${parsed[0].PSTypeFor}`
      if (openInBackground) {
        const iframe = $('#__PSZY_BGFRAME__') as HTMLIFrameElement
        iframe.src = url
        iframe.contentWindow.onload = setTimeout(() => { updateStationInfo(node).catch(e => console.error(e)) }, 500)
      } else {
        const w = window.open(url, "_blank")
        w.onload = () => setTimeout(() => { updateStationInfo(node).catch(e => console.error(e)) }, 500)
      }
    } else {
      throw new Error('No problem banks found')
    }
  })
}

function updateWithCached(node, __PSZY_INFO__) {
  const stid = node.querySelector('.spanclass.uiicon').attributes.spn.value
  if (__PSZY_INFO__) {
    const info = __PSZY_INFO__[node.querySelector('.spanclass.uiicon').attributes.spn.value]
    if (info) {
      updateNodeInfoUI(node, info)
      return true
    }
  }
  return false
}

export async function fillAllStationInfoCached() {
	const lis = getAllItems()
  const {__PSZY_INFO__} = await chrome.storage.local.get("__PSZY_INFO__")
  lis.forEach(node => updateWithCached(node, __PSZY_INFO__))
}

export async function updateStationInfo(node) {
  const stid = node.querySelector('.spanclass.uiicon').attributes.spn.value
  const fetchBody = { StationId: stid }
  return fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
    headers: {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json; charset=UTF-8",
      "sec-gpc": "1",
      "x-requested-with": "XMLHttpRequest",
      "cache-control": "no-cache",
      "pragma": "no-cache",
    },
    referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(fetchBody),
    method: "POST",
    mode: "cors",
    credentials: "include"
  })
    .then(response => response.json())
    .then(data => {
      const parsed = JSON.parse(data.d)
      if (parsed.length === 0) throw new Error("No problem banks found for this station")
      const current = parsed[0]
      const response1 = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/ViewPB", {
        headers: {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json; charset=UTF-8",
          "sec-gpc": "1",
          "x-requested-with": "XMLHttpRequest",
          "cache-control": "no-cache",
          "pragma": "no-cache",
        },
        referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${current.CompanyId}&StationId=${current.StationId}&BatchIdFor=${current.BatchIdFor}&PSTypeFor=${current.PSTypeFor}`,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "{\"batchid\": \"undefined\" }",
        method: "POST",
        mode: "cors",
        credentials: "include"
      })
      const response2 = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/StationFacilitiesInfo", {
        headers: {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json; charset=UTF-8",
          "sec-gpc": "1",
          "x-requested-with": "XMLHttpRequest",
          "cache-control": "no-cache",
          "pragma": "no-cache",
        },
        referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${current.CompanyId}&StationId=${current.StationId}&BatchIdFor=${current.BatchIdFor}&PSTypeFor=${current.PSTypeFor}`,
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "{\"StationId\": \"0\"}",
        method: "POST",
        mode: "cors",
        credentials: "include"
      })
      return Promise.all([response1, response2])
    })
    .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
    .then(async ([data1, data2]) => {
      const parsed1 = JSON.parse(data1.d)
      const parsed2 = JSON.parse(data2.d)[0]
      const totStudents = parsed1?.map(p => p.TotalReqdStudents).reduce((acc, val) => acc + val) ?? '-'
      const tags = parsed1?.map(p => p.Tags.replaceAll(' ', '').replaceAll('-', '').replaceAll('Any', '')).join(',')
      const info = {
        stipend: parsed2?.Stipend ?? '-',
        totStudents,
        totalProject: parsed1?.[0].TotalProject ?? '-',
        tags
      }
      updateNodeInfoUI(node, info)
      const {__PSZY_INFO__} = await chrome.storage.local.get("__PSZY_INFO__")
      if (__PSZY_INFO__) {
        __PSZY_INFO__[stid] = info
        chrome.storage.local.set({ __PSZY_INFO__ })
      } else {
        chrome.storage.local.set({ __PSZY_INFO__: { [stid]: info } })
      }
  })
}

function updateNodeInfoUI(node, {stipend, totStudents, totalProject, tags}) {
  node.querySelector('#__PSZY_STIPEND__ span').innerText = stipend ?? '-'
  node.querySelector('#__PSZY_STUDENTS__ span').innerText = totStudents
  node.querySelector('#__PSZY_PROJECTS__ span').innerText = totalProject ?? '-'
  node.querySelector('#__PSZY_DISCIPLINE__ span').innerText = tags
}

export function fillAllStationInfo() {
  const allNodes = getAllItems()
  allNodes.forEach((n, i) => {
    setTimeout(() => {
      viewProblemBank(n, { openInBackground: true }).then(() => {
        $('#__PSZY_FETCHINFOPROGRESS__').value = (i + 1) / allNodes.length
        $('#__PSZY_FETCHINFOPROGRESS__').title = `${i + 1}/${allNodes.length}: about ${Math.ceil((allNodes.length - i) * 2 / 60)} minutes remaining`
        if (i === allNodes.length - 1) {
          $('#__PSZY_FETCHINFOPROGRESS__').removeAttribute('value')
        }
      })
    }, 2000*i)
  })
}
