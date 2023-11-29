// @ts-nocheck

import globalControls from './templates/globalControls.html?raw'
import itemControls from './templates/itemControls.html?raw'
import { $, moveup, movedown, movetotop, movetobottom, moveswap, moveto, exportCsv, importCsv, selectRange, deselectRange, selectPattern, deselectPattern, deselectAll, moveselectedto, moveselectedtop, moveselectedbottom, handleStrayClick, viewProblemBank, fillAllStationInfo, getAllItems, updateSelectedCount } from './utils'

function checks() {
	if (!['psd.bits-pilani.ac.in', 'localhost', '127.0.0.1'].includes(location.hostname)) {
		alert('Only works on http://psd.bits-pilani.ac.in')
		return false
	}

	if (!location.pathname.includes('StudentStationPreference.aspx')) {
		alert('You need to be on Fill Station Prefrence page')
		return false
	}

	if (window.__PSZYSET__ === true) {
		alert('Already ran here once. Please refresh')
		return false
	}

	return true
}

if (checks()) {

	window.__PSZYSET__ = true

	// disable default sorting library
	const script = document.createElement('script')
	script.src = chrome.runtime.getURL('csp.js') ;
	(document.head || document.documentElement).appendChild(script);

	// add global controls
	const divider = $('#rptlist > .hr.hr-dotted')
	divider.outerHTML = globalControls + divider.outerHTML

	// add item controls
	const lis = $('#sortable_nav').querySelectorAll('li')
	lis.forEach((li) => (li.innerHTML += itemControls))

	// retrieve notes from local storage
	retrieveSavedNotes(lis)

	document.addEventListener('click', checkPSZYClicks, false)
	
	checkForNewStations()

	function checkPSZYClicks(e) {
		switch (e.target.id) {
			case '__PSZY_ADDNOTE__': {
				const note = e.target.parentNode.parentNode.querySelector('#__PSZY_NOTE__')
				e.target.parentNode.parentNode.setAttribute('note-editing', "true")
				note.focus()
				if (note.innerText.length > 0) break
				note.innerText = 'Edit me'
				// select text
				const range = document.createRange();
				range.selectNodeContents(note);
				const sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				break
			}
			case '__PSZY_NOTE__':
				// ignore click
				break
			case '__PSZY_MOVEUP__':
				moveup(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVEDOWN__':
				movedown(e.target.parentNode.parentNode)
				break
			case '__PSZY_TOP__':
				movetotop(e.target.parentNode.parentNode)
				break
			case '__PSZY_BOTTOM__':
				movetobottom(e.target.parentNode.parentNode)
				break
			case '__PSZY_SWAP__':
				moveswap(e.target.parentNode.parentNode)
				break
			case '__PSZY_MOVETO__':
				moveto(e.target.parentNode.parentNode)
				break
			case '__PSZY_PBANK__':
				viewProblemBank(e.target.parentNode.parentNode, { openInBackground: false })
				break
			case '__PSZY_STIPEND__':
			case '__PSZY_STUDENTS__':
			case '__PSZY_PROJECTS__':
			case '__PSZY_DISCIPLINE__':
				viewProblemBank(e.target.parentNode.parentNode, { openInBackground: true })
				break
			case '__PSZY_FETCHINFO__': {
				fillAllStationInfo()
				break
			}
			case '__PSZY_EXPORT__':
				exportCsv()
				break
			case '__PSZY_IMPORT__':
				importCsv()
				break
			case '__PSZY_SELECTRANGE__':
				selectRange()
				break
			case '__PSZY_DESELECTRANGE__':
				deselectRange()
				break
			case '__PSZY_SELECTPATTERN__':
				selectPattern()
				break
			case '__PSZY_DESELECTPATTERN__':
				deselectPattern()
				break
			case '__PSZY_DESELECTALL__':
				deselectAll()
				break
			case '__PSZY_MOVESELECTED__':
				moveselectedto()
				break
			case '__PSZY_MOVESELECTEDTOP__':
				moveselectedtop()
				break
			case '__PSZY_MOVESELECTEDBOTTOM__':
				moveselectedbottom()
				break
			case '__PSZY_SCROLLTOTOP__':
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				})
				break
			default:
				handleStrayClick(e.target)
				break
		}
	}

}

async function checkForNewStations() {
	const { __PSZY_STATIONS__ : oldStations} = await chrome.storage.local.get('__PSZY_STATIONS__')
	const lis = getAllItems()
	const currentStations = Array.from(lis).map(li => li.querySelector(".spanclass.uiicon").getAttribute("spn"))
	console.log(oldStations)
	if (oldStations) {
		const newStations = currentStations.filter(station => !oldStations.includes(station))
		if (newStations.length > 0) {
			newStations.forEach(station => {
				Array.from(lis).find(li => li.querySelector(".spanclass.uiicon").getAttribute("spn")== station)?.classList.add("selected")
			})
			updateSelectedCount()
			alert(`Found and selected${newStations.length} new station${newStations.length > 1 ? 's' : ''}`)
		}
	}
	chrome.storage.local.set({ __PSZY_STATIONS__: currentStations })
}

function retrieveSavedNotes(lis) {
	chrome.storage.local.get(['__PSZY_NOTES__'], (result) => {
		console.log(result)
		const notes = result.__PSZY_NOTES__
		if (notes) {
			notes.forEach((note, i) => {
				Array.from(lis).find(li => li.querySelector(".spanclass.uiicon").getAttribute("spn")== note.spn).querySelector('#__PSZY_NOTE__').innerText = note.note
			})
		}
	})
}