const O = `<div id="__PSZY_GLOBAL_CONTROLS__">
  <form class="form-horizontal">
    <hr>
    <div class="form-group">
      <label class="col-md-4 control-label">Backup</label>
      <div class="col-md-4">
        <input id="__PSZY_EXPORT__" type="button" value="Export" class="btn btn-primary">
        <input id="__PSZY_IMPORT__" type="button" value="Import" class="btn btn-inverse">
        <input id="__PSZY_FILE__" type="file" accept=".csv,text/csv" style="display: none" />
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-md-4 control-label">Select Range</label>
      <div class="col-md-4">
        <input id="__PSZY_RANGE__" class="form-control" type="search" placeholder="0-10,14-18,20,25">
      </div>
      <div class="col-md-4">
        <input id="__PSZY_SELECTRANGE__" type="button" value="Select" class="btn btn-primary">
        <input id="__PSZY_DESELECTRANGE__" type="button" value="Deselect" class="btn btn-inverse">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label">Select Pattern</label>
      <div class="col-md-4">
        <input id="__PSZY_PATTERN__" class="form-control" type="search" placeholder="IT|Bengaluru (regex)">
      </div>
      <div class="col-md-4">
        <input id="__PSZY_SELECTPATTERN__" type="button" value="Select" class="btn btn-primary">
        <input id="__PSZY_DESELECTPATTERN__" type="button" value="Deselect" class="btn btn-inverse">
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-4 control-label"></label>
      <div class="col-md-4">
        <input id="__PSZY_DESELECTALL__" type="button" value="Deselect All" class="btn btn-inverse">
        <span><span id="__PSZY_SELECTEDCOUNT__">0</span> selected</span>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-md-4 control-label">Move selected to preference#</label>
      <div class="col-md-4">
        <input id="__PSZY_PREFNO__" class="form-control" type="number" value="1" min="1">
      </div>
      <div class="col-md-4">
        <input id="__PSZY_MOVESELECTED__" type="button" value="Move" class="btn btn-primary">
        <input id="__PSZY_MOVESELECTEDTOP__" type="button" value="Top" class="btn btn-inverse">
        <input id="__PSZY_MOVESELECTEDBOTTOM__" type="button" value="Bottom" class="btn btn-inverse">
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-md-4 control-label"></label>
      <div class="col-md-4">
        <input id="__PSZY_FETCHINFO__" type="button" value="Fetch Info" class="btn btn-primary">
        <span>Warning: this will take a long time</span>
        <progress id="__PSZY_FETCHINFOPROGRESS__"></progress>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <label class="col-md-4 control-label"></label>
      <div class="col-md-4">
        <a href="https://github.com/mehulmpt/ps-extender/issues" class="btn btn-link" target="_blank">Report an issue</a>
      </div>
    </div>
    <hr>
  </form>
  <div id="__PSZY_SCROLLTOTOP__" class="btn btn-primary btn-scroll-to-top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </div>
  <iframe id="__PSZY_BGFRAME__" style="display:none;"></iframe>
</div>`, Y = `<div id="__PSZY_INFO__">
  <div id="__PSZY_STIPEND__" title="Stipend" class="btn btn-white btn-toolbar btn-xs">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg>
    <span>-</span>
  </div>
  <div id="__PSZY_STUDENTS__" title="#students" class="btn btn-white btn-toolbar btn-xs">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    <span>-</span>
  </div>
  <div id="__PSZY_PROJECTS__" title="#projects" class="btn btn-white btn-toolbar btn-xs">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z"></path><path d="M2 8v11c0 1.1.9 2 2 2h14"></path></svg>
    <span>-</span>
    </div>
  <div id="__PSZY_DISCIPLINE__" title="disciplines" class="btn btn-white btn-toolbar btn-xs">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    <span>-</span>
  </div>
</div>
<div class="spacer">&nbsp;</div>
<div id="__PSZY_CONTROLS__">
  <div id="__PSZY_MOVEUP__" class="btn btn-primary btn-toolbar" title="Move 1 up">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
  </div>
  <div id="__PSZY_MOVEDOWN__" class="btn btn-primary btn-toolbar" title="Move 1 down">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </div>
  <div id="__PSZY_TOP__" class="btn btn-primary btn-toolbar" title="Send to top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>
  </div>
  <div id="__PSZY_BOTTOM__" class="btn btn-primary btn-toolbar" title="Send to bottom">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
  </div>
  <div id="__PSZY_SWAP__" class="btn btn-primary btn-toolbar" title="Swap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
  </div>
  <div id="__PSZY_MOVETO__" class="btn btn-primary btn-toolbar" title="Move to">MoveTo</div>
  <div id="__PSZY_PBANK__" class="btn btn-inverse btn-toolbar" title="open problem bank">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  </div>
  <div id="__PSZY_ADDNOTE__" class="btn btn-inverse btn-toolbar" title="Add Note">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  </div>
</div>
<div id="__PSZY_NOTE__" contenteditable="true"></div>`;
function l(e) {
  const n = document.querySelectorAll(e);
  return n.length === 1 ? n[0] : [...n]; 
}
function Z(e) {
  const n = parseInt(e.querySelector("#spnRank").innerText), r = parseInt(prompt("Enter station# to swap with"), 10), o = l("#sortable_nav li")[r - 1];
  d([e], r, { preserveSelection: !0, recalculateRanks: !1 }), d([o], n, { preserveSelection: !0 });
}
function P() {
  return l("#sortable_nav").querySelectorAll("li.selected");
}
function _() {
  return Array.from(document.querySelectorAll("#sortable_nav > li"));
}
function I() {
  d(P(), parseInt(l("#__PSZY_PREFNO__").value, 10));
}
function C() {
  d(P(), 1);
}
function R() {
  d(P(), _().length);
}
function d(e, n, { preserveSelection: r = !1, recalculateRanks: s = !0 } = {}) {
  const o = l("#sortable_nav");
  let t = _();
  if (e.length == 0)
    return alert("Select at least one station");
  if (!Number.isInteger(n) || isNaN(n) || n < 1)
    return alert("Enter a valid preference number");
  if (n > t.length)
    return alert("Not enough stations. Try a smaller number");
  if (e.forEach((i) => {
    o.removeChild(i);
  }), t = _(), n < t.length) {
    const i = t[n - 1];
    e.forEach((a) => {
      o.insertBefore(a, i);
    });
  } else
    e.forEach((i) => {
      o.appendChild(i);
    });
  s && k(), H(...e), r || T();
}
function L(e) {
  var n;
  e.matches("input, a, button") || ((n = e.closest("#sortable_nav > li")) == null || n.classList.toggle("selected"), v());
}
function T() {
  P().forEach((e) => e.classList.remove("selected")), v();
}
function w() {
  const e = l("#__PSZY_RANGE__").value.split(","), n = [];
  return e.forEach((r) => {
    r = r.trim();
    const s = r.match(/^(\d+)$/m);
    if (s !== null) {
      n.push(parseInt(s[1]));
      return;
    }
    const o = r.match(/^(\d+)\W*-\W*(\d+)$/m);
    if (o !== null) {
      const t = parseInt(o[1]), i = parseInt(o[2]);
      for (let a = t; a <= i; a++)
        n.push(a);
      return;
    }
  }), n;
}
function D() {
  const e = _();
  w().forEach((n) => {
    e[n - 1].classList.add("selected");
  }), v();
}
function B() {
  const e = _();
  w().forEach((n) => {
    e[n - 1].classList.remove("selected");
  }), v();
}
function y() {
  const e = l("#__PSZY_PATTERN__").value;
  return new RegExp(e, "im");
}
function A() {
  const e = _(), n = y();
  e.forEach((r) => {
    const s = r.querySelector("span.spanclass").innerText;
    n.test(s) && r.classList.add("selected");
  }), v();
}
function M() {
  const e = _(), n = y();
  e.forEach((r) => {
    const s = r.querySelector("span.spanclass").innerText;
    n.test(s) && r.classList.remove("selected");
  }), v();
}
function v() {
  const e = P().length;
  l("#__PSZY_SELECTEDCOUNT__").innerText = e.toString();
}
function q(e) {
  const n = parseInt(e.previousSibling.querySelector("#spnRank").innerText);
  d([e], n, { preserveSelection: !0 }), window.scrollBy({
    top: -1 * e.offsetHeight,
    behavior: "smooth"
  });
}
function F(e) {
  const n = parseInt(e.nextSibling.querySelector("#spnRank").innerText);
  d([e], n, { preserveSelection: !0 }), window.scrollBy({
    top: e.offsetHeight,
    behavior: "smooth"
  });
}
function j(e) {
  d([e], 1, { preserveSelection: !0 });
}
function U(e) {
  d([e], _().length, { preserveSelection: !0 });
}
function $(e) {
  const n = parseInt(prompt("Enter preference#"), 10);
  d([e], n, { preserveSelection: !0 });
}
function H(...e) {
  e.forEach((n) => {
    n.classList.add("glow"), setTimeout(() => {
      n.classList.remove("glow");
    }, 400);
  });
}
function k() {
  l("#sortable_nav > li").forEach((e, n) => {
    e.querySelector("#spnRank").innerText = n + 1, e.querySelector("span.spanclass").setAttribute("cls", n + 1);
  });
}
function V() {
  const e = _(), n = [["ID", "NAME", "ACCOMO", "STIPEND", "STUDENTS", "PROJECTS", "DISCIPLINES", "NOTES"]];
  e.forEach((t) => {
    const i = t.querySelector("span.spanclass").getAttribute("spn"), a = encodeURIComponent(t.querySelector("span.spanclass").innerText), p = Number(t.querySelector('input[type="checkbox"]').checked), b = t.querySelector("#__PSZY_STIPEND__ span").innerText, S = t.querySelector("#__PSZY_STUDENTS__ span").innerText, h = t.querySelector("#__PSZY_PROJECTS__ span").innerText, c = encodeURIComponent(t.querySelector("#__PSZY_DISCIPLINE__ span").innerText), m = encodeURIComponent(t.querySelector("#__PSZY_NOTE__").innerText);
    n.push([i, a, p, b, S, h, c, m]);
  });
  const r = new Blob([n.map((t) => t.join(",")).join(`
`)], { type: "text/html", endings: "native" }), s = URL.createObjectURL(r), o = document.createElement("a");
  o.href = s, o.download = "station_preferences.csv", document.body.appendChild(o), o.click(), o.remove(), URL.revokeObjectURL(s);
}
function G() {
  const e = l("#__PSZY_FILE__");
  e.click(), e.addEventListener("change", () => {
    var n, r;
    (r = (n = e.files) == null ? void 0 : n[0]) == null || r.text().then((s) => {
      if (!s.startsWith("ID,NAME,ACCOMO,STIPEND,STUDENTS,PROJECTS,DISCIPLINES,NOTES"))
        return alert("Bad File");
      const o = document.createDocumentFragment(), t = {
        restored: 0,
        added: 0,
        deleted: 0
      }, i = s.trim().split(`
`).map((a) => a.trim().split(","));
      i.shift(), i.forEach((a) => {
        var E;
        const [p, b, S, h, c, m, N, x] = a, u = (E = l("#sortable_nav").querySelector(`span.spanclass[spn="${p}"]`)) == null ? void 0 : E.parentNode;
        if (!u) {
          t.deleted++;
          return;
        }
        u.querySelector('input[type="checkbox"]').checked = Number(S), u.querySelector("#__PSZY_STIPEND__ span").innerText = h, u.querySelector("#__PSZY_STUDENTS__ span").innerText = c, u.querySelector("#__PSZY_PROJECTS__ span").innerText = m, u.querySelector("#__PSZY_DISCIPLINE__ span").innerText = decodeURIComponent(N), u.querySelector("#__PSZY_NOTE__").innerText = decodeURIComponent(x), t.restored++, o.appendChild(u);
      }), t.added = document.querySelectorAll("#sortable_nav > li").length, t.added ? l("#sortable_nav").insertBefore(o, l("#sortable_nav > li:first-child")) : l("#sortable_nav").appendChild(o), k(), alert(`imported ${i.length} rows, ${t.restored} stations restored from backup, ${t.added} added and ${t.deleted} deleted since last visit`);
    });
  });
}
function g(e, { openInBackground: n = !1 } = {}) {
  let s = { StationId: e.querySelector(".spanclass.uiicon").attributes.spn.value };
  return fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
    headers: {
      "content-type": "application/json; charset=UTF-8"
    },
    referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(s),
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then((o) => o.json()).then((o) => {
    const t = JSON.parse(o.d);
    if (t.length > 0) {
      const i = `StationproblemBankDetails.aspx?CompanyId=${t[0].CompanyId}&StationId=${t[0].StationId}&BatchIdFor=${t[0].BatchIdFor}&PSTypeFor=${t[0].PSTypeFor}`;
      if (n) {
        const a = l("#__PSZY_BGFRAME__");
        a.src = i, a.contentWindow.onload = setTimeout(() => {
          f(e).catch((p) => console.error(p));
        }, 500);
      } else {
        const a = window.open(i, "_blank");
        a.onload = () => setTimeout(() => {
          f(e).catch((p) => console.error(p));
        }, 500);
      }
    } else
      throw new Error("No problem banks found");
  });
}
function f(e) {
  const r = { StationId: e.querySelector(".spanclass.uiicon").attributes.spn.value };
  return fetch("http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx/getPBPOPUP", {
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json; charset=UTF-8",
      "sec-gpc": "1",
      "x-requested-with": "XMLHttpRequest",
      "cache-control": "no-cache",
      pragma: "no-cache"
    },
    referrer: "http://psd.bits-pilani.ac.in/Student/ViewActiveStationProblemBankData.aspx",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(r),
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then((s) => s.json()).then((s) => {
    const o = JSON.parse(s.d);
    if (o.length === 0)
      throw new Error("No problem banks found for this station");
    const t = o[0], i = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/ViewPB", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json; charset=UTF-8",
        "sec-gpc": "1",
        "x-requested-with": "XMLHttpRequest",
        "cache-control": "no-cache",
        pragma: "no-cache"
      },
      referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${t.CompanyId}&StationId=${t.StationId}&BatchIdFor=${t.BatchIdFor}&PSTypeFor=${t.PSTypeFor}`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"batchid": "undefined" }',
      method: "POST",
      mode: "cors",
      credentials: "include"
    }), a = fetch("http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx/StationFacilitiesInfo", {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json; charset=UTF-8",
        "sec-gpc": "1",
        "x-requested-with": "XMLHttpRequest",
        "cache-control": "no-cache",
        pragma: "no-cache"
      },
      referrer: `http://psd.bits-pilani.ac.in/Student/StationproblemBankDetails.aspx?CompanyId=${t.CompanyId}&StationId=${t.StationId}&BatchIdFor=${t.BatchIdFor}&PSTypeFor=${t.PSTypeFor}`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"StationId": "0"}',
      method: "POST",
      mode: "cors",
      credentials: "include"
    });
    return Promise.all([i, a]);
  }).then(([s, o]) => Promise.all([s.json(), o.json()])).then(([s, o]) => {
    var b, S, h;
    const t = JSON.parse(s.d), i = JSON.parse(o.d)[0], a = (b = t == null ? void 0 : t.map((c) => c.TotalReqdStudents).reduce((c, m) => c + m)) != null ? b : "-", p = t == null ? void 0 : t.map((c) => c.Tags.replaceAll(" ", "").replaceAll("-", "").replaceAll("Any", "")).join(",");
    e.querySelector("#__PSZY_STIPEND__ span").innerText = (S = i == null ? void 0 : i.Stipend) != null ? S : "-", e.querySelector("#__PSZY_STUDENTS__ span").innerText = a, e.querySelector("#__PSZY_PROJECTS__ span").innerText = (h = t == null ? void 0 : t[0].TotalProject) != null ? h : "-", e.querySelector("#__PSZY_DISCIPLINE__ span").innerText = Array.from(new Set(p.split(","))).filter((c) => !!c).join(",") || "Any";
  });
}
function J() {
  const e = _();
  e.forEach((n, r) => {
    setTimeout(() => {
      g(n, { openInBackground: !0 }).then(() => {
        l("#__PSZY_FETCHINFOPROGRESS__").value = (r + 1) / e.length, l("#__PSZY_FETCHINFOPROGRESS__").title = `${r + 1}/${e.length}: about ${Math.ceil((e.length - r) * 2 / 60)} minutes remaining`, r === e.length - 1 && l("#__PSZY_FETCHINFOPROGRESS__").removeAttribute("value");
      });
    }, 2e3 * r);
  });
}
function W() {
  return ["psd.bits-pilani.ac.in", "localhost", "127.0.0.1"].includes(location.hostname) ? location.pathname.includes("StudentStationPreference.aspx") ? window.__PSZYSET__ === !0 ? (alert("Already ran here once. Please refresh"), !1) : !0 : (alert("You need to be on Fill Station Prefrence page"), !1) : (alert("Only works on http://psd.bits-pilani.ac.in"), !1);
}
if (W()) {
  let e = function(o) {
    switch (o.target.id) {
      case "__PSZY_ADDNOTE__": {
        const t = o.target.parentNode.parentNode.querySelector("#__PSZY_NOTE__");
        if (t.focus(), t.innerText.length > 0)
          break;
        t.innerText = "Edit me";
        const i = document.createRange();
        i.selectNodeContents(t);
        const a = window.getSelection();
        a.removeAllRanges(), a.addRange(i);
        break;
      }
      case "__PSZY_NOTE__":
        break;
      case "__PSZY_MOVEUP__":
        q(o.target.parentNode.parentNode);
        break;
      case "__PSZY_MOVEDOWN__":
        F(o.target.parentNode.parentNode);
        break;
      case "__PSZY_TOP__":
        j(o.target.parentNode.parentNode);
        break;
      case "__PSZY_BOTTOM__":
        U(o.target.parentNode.parentNode);
        break;
      case "__PSZY_SWAP__":
        Z(o.target.parentNode.parentNode);
        break;
      case "__PSZY_MOVETO__":
        $(o.target.parentNode.parentNode);
        break;
      case "__PSZY_PBANK__":
        g(o.target.parentNode.parentNode, { openInBackground: !1 });
        break;
      case "__PSZY_STIPEND__":
      case "__PSZY_STUDENTS__":
      case "__PSZY_PROJECTS__":
      case "__PSZY_DISCIPLINE__":
        g(o.target.parentNode.parentNode, { openInBackground: !0 });
        break;
      case "__PSZY_FETCHINFO__": {
        J();
        break;
      }
      case "__PSZY_EXPORT__":
        V();
        break;
      case "__PSZY_IMPORT__":
        G();
        break;
      case "__PSZY_SELECTRANGE__":
        D();
        break;
      case "__PSZY_DESELECTRANGE__":
        B();
        break;
      case "__PSZY_SELECTPATTERN__":
        A();
        break;
      case "__PSZY_DESELECTPATTERN__":
        M();
        break;
      case "__PSZY_DESELECTALL__":
        T();
        break;
      case "__PSZY_MOVESELECTED__":
        I();
        break;
      case "__PSZY_MOVESELECTEDTOP__":
        C();
        break;
      case "__PSZY_MOVESELECTEDBOTTOM__":
        R();
        break;
      case "__PSZY_SCROLLTOTOP__":
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        break;
      default:
        L(o.target);
        break;
    }
  };
  window.__PSZYSET__ = !0;
  const n = document.createElement("script");
  n.src = chrome.runtime.getURL('csp.js') ;
  // n.onload = function () {
  //   this.remove() ; 
  // }
  (document.head || document.documentElement).appendChild(n) ;
  
  const r = l("#rptlist > .hr.hr-dotted");
  r.outerHTML = O + r.outerHTML, l("#sortable_nav").querySelectorAll("li").forEach((o) => o.innerHTML += Y), document.addEventListener("click", e, !1);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3RlbXBsYXRlcy9nbG9iYWxDb250cm9scy5odG1sP3JhdyIsIi4uL3NyYy90ZW1wbGF0ZXMvaXRlbUNvbnRyb2xzLmh0bWw/cmF3IiwiLi4vc3JjL3V0aWxzLnRzIiwiLi4vc3JjL2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJfX1BTWllfR0xPQkFMX0NPTlRST0xTX19cXFwiPlxcbiAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCI+XFxuICAgIDxocj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5CYWNrdXA8L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiX19QU1pZX0VYUE9SVF9fXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJFeHBvcnRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJfX1BTWllfSU1QT1JUX19cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkltcG9ydFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW52ZXJzZVxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9GSUxFX19cXFwiIHR5cGU9XFxcImZpbGVcXFwiIGFjY2VwdD1cXFwiLmNzdix0ZXh0L2NzdlxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmVcXFwiIC8+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aHI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+U2VsZWN0IFJhbmdlPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9SQU5HRV9fXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCIwLTEwLDE0LTE4LDIwLDI1XFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9TRUxFQ1RSQU5HRV9fXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJTZWxlY3RcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJfX1BTWllfREVTRUxFQ1RSQU5HRV9fXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJEZXNlbGVjdFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW52ZXJzZVxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPlNlbGVjdCBQYXR0ZXJuPC9sYWJlbD5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9QQVRURVJOX19cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcIklUfEJlbmdhbHVydSAocmVnZXgpXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9TRUxFQ1RQQVRURVJOX19cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIlNlbGVjdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9ERVNFTEVDVFBBVFRFUk5fX1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiRGVzZWxlY3RcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWludmVyc2VcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiX19QU1pZX0RFU0VMRUNUQUxMX19cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIkRlc2VsZWN0IEFsbFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW52ZXJzZVxcXCI+XFxuICAgICAgICA8c3Bhbj48c3BhbiBpZD1cXFwiX19QU1pZX1NFTEVDVEVEQ09VTlRfX1xcXCI+MDwvc3Bhbj4gc2VsZWN0ZWQ8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aHI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+TW92ZSBzZWxlY3RlZCB0byBwcmVmZXJlbmNlIzwvbGFiZWw+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJfX1BTWllfUFJFRk5PX19cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgdmFsdWU9XFxcIjFcXFwiIG1pbj1cXFwiMVxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJfX1BTWllfTU9WRVNFTEVDVEVEX19cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIk1vdmVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJfX1BTWllfTU9WRVNFTEVDVEVEVE9QX19cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIlRvcFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW52ZXJzZVxcXCI+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcIl9fUFNaWV9NT1ZFU0VMRUNURURCT1RUT01fX1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiQm90dG9tXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbnZlcnNlXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxocj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiX19QU1pZX0ZFVENISU5GT19fXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCJGZXRjaCBJbmZvXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5cXG4gICAgICAgIDxzcGFuPldhcm5pbmc6IHRoaXMgd2lsbCB0YWtlIGEgbG9uZyB0aW1lPC9zcGFuPlxcbiAgICAgICAgPHByb2dyZXNzIGlkPVxcXCJfX1BTWllfRkVUQ0hJTkZPUFJPR1JFU1NfX1xcXCI+PC9wcm9ncmVzcz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxocj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj48L2xhYmVsPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9tZWh1bG1wdC9wcy1leHRlbmRlci9pc3N1ZXNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5SZXBvcnQgYW4gaXNzdWU8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8aHI+XFxuICA8L2Zvcm0+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfU0NST0xMVE9UT1BfX1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc2Nyb2xsLXRvLXRvcFxcXCI+XFxuICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMi41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjxwb2x5bGluZSBwb2ludHM9XFxcIjE4IDE1IDEyIDkgNiAxNVxcXCI+PC9wb2x5bGluZT48L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGlmcmFtZSBpZD1cXFwiX19QU1pZX0JHRlJBTUVfX1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiPjwvaWZyYW1lPlxcbjwvZGl2PlwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGlkPVxcXCJfX1BTWllfSU5GT19fXFxcIj5cXG4gIDxkaXYgaWQ9XFxcIl9fUFNaWV9TVElQRU5EX19cXFwiIHRpdGxlPVxcXCJTdGlwZW5kXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13aGl0ZSBidG4tdG9vbGJhciBidG4teHNcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48cGF0aCBkPVxcXCJNNiAzaDEyXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYgOGgxMlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIm02IDEzIDguNSA4XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYgMTNoM1xcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05IDEzYzYuNjY3IDAgNi42NjctMTAgMC0xMFxcXCI+PC9wYXRoPjwvc3ZnPlxcbiAgICA8c3Bhbj4tPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfU1RVREVOVFNfX1xcXCIgdGl0bGU9XFxcIiNzdHVkZW50c1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2hpdGUgYnRuLXRvb2xiYXIgYnRuLXhzXFxcIj5cXG4gICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyLjVcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PHBhdGggZD1cXFwiTTE2IDIxdi0yYTQgNCAwIDAgMC00LTRINmE0IDQgMCAwIDAtNCA0djJcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5XFxcIiBjeT1cXFwiN1xcXCIgcj1cXFwiNFxcXCI+PC9jaXJjbGU+PHBhdGggZD1cXFwiTTIyIDIxdi0yYTQgNCAwIDAgMC0zLTMuODdcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTYgMy4xM2E0IDQgMCAwIDEgMCA3Ljc1XFxcIj48L3BhdGg+PC9zdmc+XFxuICAgIDxzcGFuPi08L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIl9fUFNaWV9QUk9KRUNUU19fXFxcIiB0aXRsZT1cXFwiI3Byb2plY3RzXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13aGl0ZSBidG4tdG9vbGJhciBidG4teHNcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48cGF0aCBkPVxcXCJNOCAxN2gxMmEyIDIgMCAwIDAgMi0yVjlhMiAyIDAgMCAwLTItMmgtMy45M2EyIDIgMCAwIDEtMS42Ni0uOWwtLjgyLTEuMmEyIDIgMCAwIDAtMS42Ni0uOUg4YTIgMiAwIDAgMC0yIDJ2OWMwIDEuMS45IDIgMiAyWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yIDh2MTFjMCAxLjEuOSAyIDIgMmgxNFxcXCI+PC9wYXRoPjwvc3ZnPlxcbiAgICA8c3Bhbj4tPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIl9fUFNaWV9ESVNDSVBMSU5FX19cXFwiIHRpdGxlPVxcXCJkaXNjaXBsaW5lc1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2hpdGUgYnRuLXRvb2xiYXIgYnRuLXhzXFxcIj5cXG4gICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyLjVcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCI+PHBhdGggZD1cXFwiTTIgM2g2YTQgNCAwIDAgMSA0IDR2MTRhMyAzIDAgMCAwLTMtM0gyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMiAzaC02YTQgNCAwIDAgMC00IDR2MTRhMyAzIDAgMCAxIDMtM2g3elxcXCI+PC9wYXRoPjwvc3ZnPlxcbiAgICA8c3Bhbj4tPC9zcGFuPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwic3BhY2VyXFxcIj4mbmJzcDs8L2Rpdj5cXG48ZGl2IGlkPVxcXCJfX1BTWllfQ09OVFJPTFNfX1xcXCI+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfTU9WRVVQX19cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXRvb2xiYXJcXFwiIHRpdGxlPVxcXCJNb3ZlIDEgdXBcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48bGluZSB4MT1cXFwiMTJcXFwiIHkxPVxcXCIxOVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiNVxcXCI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjUgMTIgMTIgNSAxOSAxMlxcXCI+PC9wb2x5bGluZT48L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwiX19QU1pZX01PVkVET1dOX19cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXRvb2xiYXJcXFwiIHRpdGxlPVxcXCJNb3ZlIDEgZG93blxcXCI+XFxuICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMi41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjxsaW5lIHgxPVxcXCIxMlxcXCIgeTE9XFxcIjVcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjE5XFxcIj48L2xpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTkgMTIgMTIgMTkgNSAxMlxcXCI+PC9wb2x5bGluZT48L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwiX19QU1pZX1RPUF9fXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi10b29sYmFyXFxcIiB0aXRsZT1cXFwiU2VuZCB0byB0b3BcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48cG9seWxpbmUgcG9pbnRzPVxcXCIxNyAxMSAxMiA2IDcgMTFcXFwiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz1cXFwiMTcgMTggMTIgMTMgNyAxOFxcXCI+PC9wb2x5bGluZT48L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBpZD1cXFwiX19QU1pZX0JPVFRPTV9fXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi10b29sYmFyXFxcIiB0aXRsZT1cXFwiU2VuZCB0byBib3R0b21cXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48cG9seWxpbmUgcG9pbnRzPVxcXCI3IDEzIDEyIDE4IDE3IDEzXFxcIj48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9XFxcIjcgNiAxMiAxMSAxNyA2XFxcIj48L3BvbHlsaW5lPjwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfU1dBUF9fXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi10b29sYmFyXFxcIiB0aXRsZT1cXFwiU3dhcFxcXCI+XFxuICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiMi41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiPjxwb2x5bGluZSBwb2ludHM9XFxcIjE2IDMgMjEgMyAyMSA4XFxcIj48L3BvbHlsaW5lPjxsaW5lIHgxPVxcXCI0XFxcIiB5MT1cXFwiMjBcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjNcXFwiPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPVxcXCIyMSAxNiAyMSAyMSAxNiAyMVxcXCI+PC9wb2x5bGluZT48bGluZSB4MT1cXFwiMTVcXFwiIHkxPVxcXCIxNVxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMjFcXFwiPjwvbGluZT48bGluZSB4MT1cXFwiNFxcXCIgeTE9XFxcIjRcXFwiIHgyPVxcXCI5XFxcIiB5Mj1cXFwiOVxcXCI+PC9saW5lPjwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfTU9WRVRPX19cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXRvb2xiYXJcXFwiIHRpdGxlPVxcXCJNb3ZlIHRvXFxcIj5Nb3ZlVG88L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIl9fUFNaWV9QQkFOS19fXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbnZlcnNlIGJ0bi10b29sYmFyXFxcIiB0aXRsZT1cXFwib3BlbiBwcm9ibGVtIGJhbmtcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48Y2lyY2xlIGN4PVxcXCIxMlxcXCIgY3k9XFxcIjEyXFxcIiByPVxcXCIxMFxcXCI+PC9jaXJjbGU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMTZcXFwiIHgyPVxcXCIxMlxcXCIgeTI9XFxcIjEyXFxcIj48L2xpbmU+PGxpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiOFxcXCIgeDI9XFxcIjEyLjAxXFxcIiB5Mj1cXFwiOFxcXCI+PC9saW5lPjwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGlkPVxcXCJfX1BTWllfQURETk9URV9fXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbnZlcnNlIGJ0bi10b29sYmFyXFxcIiB0aXRsZT1cXFwiQWRkIE5vdGVcXFwiPlxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjIuNVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIj48cGF0aCBkPVxcXCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41elxcXCI+PC9wYXRoPjwvc3ZnPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBpZD1cXFwiX19QU1pZX05PVEVfX1xcXCIgY29udGVudGVkaXRhYmxlPVxcXCJ0cnVlXFxcIj48L2Rpdj5cIiIsIi8vIEB0cy1ub2NoZWNrXG5cbmV4cG9ydCBmdW5jdGlvbiAkKHNlbGVjdG9yKSB7XG5cdGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcilcblx0cmV0dXJuIGVsZW1zLmxlbmd0aCA9PT0gMSA/IGVsZW1zWzBdIDogWy4uLmVsZW1zXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZXN3YXAobm9kZSkge1xuICBjb25zdCB0aGlzUG9zID0gcGFyc2VJbnQobm9kZS5xdWVyeVNlbGVjdG9yKCcjc3BuUmFuaycpLmlubmVyVGV4dClcbiAgY29uc3Qgb3RoZXJQb3MgPSBwYXJzZUludChwcm9tcHQoJ0VudGVyIHN0YXRpb24jIHRvIHN3YXAgd2l0aCcpLCAxMClcbiAgY29uc3QgbGlzdCA9ICQoJyNzb3J0YWJsZV9uYXYgbGknKVxuICBjb25zdCBvdGhlck5vZGUgPSBsaXN0W290aGVyUG9zIC0gMV0gLy8gemVybyBiYXNlZCBpbmRleFxuICBtb3ZlU2VsZWN0ZWQoW25vZGVdLCBvdGhlclBvcywgeyBwcmVzZXJ2ZVNlbGVjdGlvbjogdHJ1ZSwgcmVjYWxjdWxhdGVSYW5rczogZmFsc2UgfSlcbiAgbW92ZVNlbGVjdGVkKFtvdGhlck5vZGVdLCB0aGlzUG9zLCB7IHByZXNlcnZlU2VsZWN0aW9uOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZCgpIHtcbiAgcmV0dXJuICQoJyNzb3J0YWJsZV9uYXYnKS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zZWxlY3RlZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxJdGVtcygpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NvcnRhYmxlX25hdiA+IGxpJykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3Zlc2VsZWN0ZWR0bygpIHtcbiAgbW92ZVNlbGVjdGVkKGdldFNlbGVjdGVkKCksIHBhcnNlSW50KCQoJyNfX1BTWllfUFJFRk5PX18nKS52YWx1ZSwgMTApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZXNlbGVjdGVkdG9wKCkge1xuICBtb3ZlU2VsZWN0ZWQoZ2V0U2VsZWN0ZWQoKSwgMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVzZWxlY3RlZGJvdHRvbSgpIHtcbiAgbW92ZVNlbGVjdGVkKGdldFNlbGVjdGVkKCksIGdldEFsbEl0ZW1zKCkubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZVNlbGVjdGVkKHNlbGVjdGlvbiwgdG8sIHsgcHJlc2VydmVTZWxlY3Rpb24gPSBmYWxzZSwgcmVjYWxjdWxhdGVSYW5rcyA9IHRydWUgfSA9IHt9KSB7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSAkKCcjc29ydGFibGVfbmF2JylcbiAgbGV0IGxpc3QgPSBnZXRBbGxJdGVtcygpXG4gIC8vIGlucHV0IHZhbGlkYXRpb25cbiAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiBhbGVydCgnU2VsZWN0IGF0IGxlYXN0IG9uZSBzdGF0aW9uJylcbiAgfVxuICBpZiAoIU51bWJlci5pc0ludGVnZXIodG8pIHx8IGlzTmFOKHRvKSB8fCB0byA8IDEpIHtcbiAgICByZXR1cm4gYWxlcnQoJ0VudGVyIGEgdmFsaWQgcHJlZmVyZW5jZSBudW1iZXInKVxuICB9XG4gIGlmICh0byA+IGxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGFsZXJ0KCdOb3QgZW5vdWdoIHN0YXRpb25zLiBUcnkgYSBzbWFsbGVyIG51bWJlcicpXG4gIH1cbiAgLy8gbW92ZVxuICBzZWxlY3Rpb24uZm9yRWFjaChub2RlID0+IHtcbiAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUpXG4gIH0pXG4gIGxpc3QgPSBnZXRBbGxJdGVtcygpXG4gIGlmICh0byA8IGxpc3QubGVuZ3RoKSB7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGxpc3RbdG8gLSAxXSAvLyB6ZXJvIGJhc2VkIGluZGV4XG4gICAgc2VsZWN0aW9uLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0Q29udGFpbmVyLmluc2VydEJlZm9yZShub2RlLCB0YXJnZXROb2RlKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0aW9uLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpXG4gICAgfSlcbiAgfVxuICBpZiAocmVjYWxjdWxhdGVSYW5rcykgY29ycmVjdFJhbmtzKClcbiAgZ2xvdyguLi5zZWxlY3Rpb24pXG4gIGlmICghcHJlc2VydmVTZWxlY3Rpb24pIGRlc2VsZWN0QWxsKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdE5vZGUobm9kZSkge1xuICAvLyBpZ25vcmUgY2xpY2tzIG9uIGFueSBpbnRlcmFjdGl2ZSBlbGVtZW50XG4gIGlmIChub2RlLm1hdGNoZXMoJ2lucHV0LCBhLCBidXR0b24nKSkgcmV0dXJuXG4gIC8vIGVsc2UgKGRlKXNlbGVjdCB0aGUgaXRlbVxuICBub2RlLmNsb3Nlc3QoJyNzb3J0YWJsZV9uYXYgPiBsaScpPy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpXG4gIHVwZGF0ZVNlbGVjdGVkQ291bnQoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZWxlY3RBbGwoKSB7XG4gIGdldFNlbGVjdGVkKCkuZm9yRWFjaChub2RlID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSlcbiAgdXBkYXRlU2VsZWN0ZWRDb3VudCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZSgpIHtcbiAgY29uc3QgcmFuZ2VzID0gJCgnI19fUFNaWV9SQU5HRV9fJykudmFsdWUuc3BsaXQoJywnKVxuICBjb25zdCBpbmRpY2VzID0gW11cbiAgcmFuZ2VzLmZvckVhY2gociA9PiB7XG4gICAgciA9IHIudHJpbSgpXG4gICAgLy8gbWF0Y2hlcyBudW1iZXJzXG4gICAgLy8gaW5zZW5zaXRpdmUgdG8gd2hpdGVzcGFjZSBhcm91bmQgbnVtYmVyXG4gICAgY29uc3Qgc2luZ2xlTnVtID0gci5tYXRjaCgvXihcXGQrKSQvbSlcbiAgICBpZiAoc2luZ2xlTnVtICE9PSBudWxsKSB7XG4gICAgICBpbmRpY2VzLnB1c2gocGFyc2VJbnQoc2luZ2xlTnVtWzFdKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBtYXRjaGVzOiAxMC0yMlxuICAgIC8vIGluc2Vuc2l0aXZlIHRvIHdoaXRlc3BhY2UgYXJvdW5kIG51bWJlclxuICAgIGNvbnN0IG51bVJhbmdlID0gci5tYXRjaCgvXihcXGQrKVxcVyotXFxXKihcXGQrKSQvbSlcbiAgICBpZiAobnVtUmFuZ2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KG51bVJhbmdlWzFdKVxuICAgICAgY29uc3QgbWF4ID0gcGFyc2VJbnQobnVtUmFuZ2VbMl0pXG4gICAgICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKSB7XG4gICAgICAgIGluZGljZXMucHVzaChpKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9KVxuICByZXR1cm4gaW5kaWNlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmFuZ2UoKSB7XG4gIGNvbnN0IGxpc3QgPSBnZXRBbGxJdGVtcygpXG4gIGdldFJhbmdlKCkuZm9yRWFjaChpID0+IHtcbiAgICAvLyB6ZXJvIGJhc2VkIGluZGV4aW5nXG4gICAgbGlzdFtpIC0gMV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICB9KVxuICB1cGRhdGVTZWxlY3RlZENvdW50KClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VsZWN0UmFuZ2UoKSB7XG4gIGNvbnN0IGxpc3QgPSBnZXRBbGxJdGVtcygpXG4gIGdldFJhbmdlKCkuZm9yRWFjaChpID0+IHtcbiAgICAvLyB6ZXJvIGJhc2VkIGluZGV4aW5nXG4gICAgbGlzdFtpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICB9KVxuICB1cGRhdGVTZWxlY3RlZENvdW50KClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhdHRlcm4oKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAkKCcjX19QU1pZX1BBVFRFUk5fXycpLnZhbHVlXG4gIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdpbScpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RQYXR0ZXJuKCkge1xuICBjb25zdCBsaXN0ID0gZ2V0QWxsSXRlbXMoKVxuICBjb25zdCByZSA9IGdldFBhdHRlcm4oKVxuICBsaXN0LmZvckVhY2gobiA9PiB7XG4gICAgY29uc3QgdGV4dCA9IG4ucXVlcnlTZWxlY3Rvcignc3Bhbi5zcGFuY2xhc3MnKS5pbm5lclRleHRcbiAgICBpZiAocmUudGVzdCh0ZXh0KSkge1xuICAgICAgbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgfVxuICB9KVxuICB1cGRhdGVTZWxlY3RlZENvdW50KClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VsZWN0UGF0dGVybigpIHtcbiAgY29uc3QgbGlzdCA9IGdldEFsbEl0ZW1zKClcbiAgY29uc3QgcmUgPSBnZXRQYXR0ZXJuKClcbiAgbGlzdC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHRleHQgPSBuLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc3BhbmNsYXNzJykuaW5uZXJUZXh0XG4gICAgaWYgKHJlLnRlc3QodGV4dCkpIHtcbiAgICAgIG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH1cbiAgfSlcbiAgdXBkYXRlU2VsZWN0ZWRDb3VudCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZENvdW50KCkge1xuICBjb25zdCBjb3VudCA9IGdldFNlbGVjdGVkKCkubGVuZ3RoXG4gICQoJyNfX1BTWllfU0VMRUNURURDT1VOVF9fJykuaW5uZXJUZXh0ID0gY291bnQudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW92ZXVwKG5vZGUpIHtcbiAgY29uc3QgbmV3UG9zID0gcGFyc2VJbnQobm9kZS5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvcignI3NwblJhbmsnKS5pbm5lclRleHQpXG4gIG1vdmVTZWxlY3RlZChbbm9kZV0sIG5ld1BvcywgeyBwcmVzZXJ2ZVNlbGVjdGlvbjogdHJ1ZSB9KVxuICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgIHRvcDogLTEgKiBub2RlLm9mZnNldEhlaWdodCxcbiAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVkb3duKG5vZGUpIHtcbiAgY29uc3QgbmV3UG9zID0gcGFyc2VJbnQobm9kZS5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKCcjc3BuUmFuaycpLmlubmVyVGV4dClcbiAgbW92ZVNlbGVjdGVkKFtub2RlXSwgbmV3UG9zLCB7IHByZXNlcnZlU2VsZWN0aW9uOiB0cnVlIH0pXG4gIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgdG9wOiBub2RlLm9mZnNldEhlaWdodCxcbiAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmV0b3RvcChub2RlKSB7XG4gIG1vdmVTZWxlY3RlZChbbm9kZV0sIDEsIHsgcHJlc2VydmVTZWxlY3Rpb246IHRydWUgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmV0b2JvdHRvbShub2RlKSB7XG4gIG1vdmVTZWxlY3RlZChbbm9kZV0sIGdldEFsbEl0ZW1zKCkubGVuZ3RoLCB7IHByZXNlcnZlU2VsZWN0aW9uOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZldG8obm9kZSkge1xuICBjb25zdCBuZXdOb2RlUG9zID0gcGFyc2VJbnQocHJvbXB0KCdFbnRlciBwcmVmZXJlbmNlIycpLCAxMClcbiAgbW92ZVNlbGVjdGVkKFtub2RlXSwgbmV3Tm9kZVBvcywgeyBwcmVzZXJ2ZVNlbGVjdGlvbjogdHJ1ZSB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xvdyguLi5ub2Rlcykge1xuICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdnbG93JylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZ2xvdycpXG4gICAgfSwgNDAwKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVjdFJhbmtzKCkge1xuICAkKCcjc29ydGFibGVfbmF2ID4gbGknKS5mb3JFYWNoKChsaSwgaW5kZXgpID0+IHtcbiAgICBsaS5xdWVyeVNlbGVjdG9yKCcjc3BuUmFuaycpLmlubmVyVGV4dCA9IGluZGV4ICsgMVxuICAgIGxpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc3BhbmNsYXNzJykuc2V0QXR0cmlidXRlKCdjbHMnLCBpbmRleCArIDEpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRDc3YoKSB7XG4gIGNvbnN0IGxpc3QgPSBnZXRBbGxJdGVtcygpXG4gIGNvbnN0IGRhdGEgPSBbWydJRCcsICdOQU1FJywgJ0FDQ09NTycsICdTVElQRU5EJywgJ1NUVURFTlRTJywgJ1BST0pFQ1RTJywgJ0RJU0NJUExJTkVTJywgJ05PVEVTJ11dXG4gIGxpc3QuZm9yRWFjaChuID0+IHtcbiAgICBjb25zdCBpZCA9IG4ucXVlcnlTZWxlY3Rvcignc3Bhbi5zcGFuY2xhc3MnKS5nZXRBdHRyaWJ1dGUoJ3NwbicpXG4gICAgY29uc3QgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc3BhbmNsYXNzJykuaW5uZXJUZXh0KVxuICAgIGNvbnN0IGFjY29tbyA9IE51bWJlcihuLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQpXG4gICAgY29uc3Qgc3RpcGVuZCA9IG4ucXVlcnlTZWxlY3RvcignI19fUFNaWV9TVElQRU5EX18gc3BhbicpLmlubmVyVGV4dFxuICAgIGNvbnN0IHN0dWRlbnRzID0gbi5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX1NUVURFTlRTX18gc3BhbicpLmlubmVyVGV4dFxuICAgIGNvbnN0IHByb2plY3RzID0gbi5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX1BST0pFQ1RTX18gc3BhbicpLmlubmVyVGV4dFxuICAgIGNvbnN0IGRpc2NpcGxpbmUgPSBlbmNvZGVVUklDb21wb25lbnQobi5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX0RJU0NJUExJTkVfXyBzcGFuJykuaW5uZXJUZXh0KVxuICAgIGNvbnN0IG5vdGVzID0gZW5jb2RlVVJJQ29tcG9uZW50KG4ucXVlcnlTZWxlY3RvcignI19fUFNaWV9OT1RFX18nKS5pbm5lclRleHQpXG4gICAgZGF0YS5wdXNoKFtpZCwgbmFtZSwgYWNjb21vLCBzdGlwZW5kLCBzdHVkZW50cywgcHJvamVjdHMsIGRpc2NpcGxpbmUsIG5vdGVzXSlcbiAgfSlcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhLm1hcChyb3cgPT4gcm93LmpvaW4oJywnKSkuam9pbignXFxuJyldLCB7IHR5cGU6ICd0ZXh0L2h0bWwnLCBlbmRpbmdzOiAnbmF0aXZlJyB9KVxuICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBhbmNob3IuaHJlZiA9IHVybFxuICBhbmNob3IuZG93bmxvYWQgPSAnc3RhdGlvbl9wcmVmZXJlbmNlcy5jc3YnXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYW5jaG9yKVxuICBhbmNob3IuY2xpY2soKVxuICBhbmNob3IucmVtb3ZlKClcbiAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXG59XG5cbi8vIHJlYWQgY3N2IGxpbmUgYnkgbGluZVxuLy8gZmluZCBzdGF0aW9uIGlkIGluIHByZWYgbGlzdFxuLy8gdXBkYXRlIHJvd1xuLy8gYWRkIHJvdyB0byBkb2MgZnJhZ21lbnRcbi8vIG5ldyBzdGF0aW9ucyByZW1haW4gaW4gbGlzdFxuLy8gYWRkIGZyYWdtZW50IHRvIHRvcCBvZiBsaXN0XG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0Q3N2KCkge1xuICBjb25zdCBwaWNrZXIgPSAkKCcjX19QU1pZX0ZJTEVfXycpXG4gIHBpY2tlci5jbGljaygpXG4gIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgcGlja2VyLmZpbGVzPy5bMF0/LnRleHQoKS50aGVuKHRleHQgPT4ge1xuICAgICAgaWYgKCF0ZXh0LnN0YXJ0c1dpdGgoJ0lELE5BTUUsQUNDT01PLFNUSVBFTkQsU1RVREVOVFMsUFJPSkVDVFMsRElTQ0lQTElORVMsTk9URVMnKSkgcmV0dXJuIGFsZXJ0KCdCYWQgRmlsZScpXG4gICAgICAvLyB0ZW1wIHN0b3JlIHByZWYgaW4gZnJhZ21lbnRcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgY29uc3Qgc3RhdHMgPSB7XG4gICAgICAgIHJlc3RvcmVkOiAwLFxuICAgICAgICBhZGRlZDogMCxcbiAgICAgICAgZGVsZXRlZDogMCxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSB0ZXh0LnRyaW0oKS5zcGxpdCgnXFxuJykubWFwKHMgPT4gcy50cmltKCkuc3BsaXQoJywnKSlcbiAgICAgIGRhdGEuc2hpZnQoKSAvLyByZW1vdmUgaGVhZGVyXG4gICAgICBkYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgY29uc3QgW2lkLCBuYW1lLCBhY2NvbW8sIHN0aXBlbmQsIHN0dWRlbnRzLCBwcm9qZWN0cywgZGlzY2lwbGluZSwgbm90ZXNdID0gcm93XG4gICAgICAgIGNvbnN0IG5vZGUgPSAkKCcjc29ydGFibGVfbmF2JykucXVlcnlTZWxlY3Rvcihgc3Bhbi5zcGFuY2xhc3Nbc3BuPVwiJHtpZH1cIl1gKT8ucGFyZW50Tm9kZVxuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAvLyBzdGF0aW9uIHdpdGhkcmF3blxuICAgICAgICAgIHN0YXRzLmRlbGV0ZWQgKytcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQgPSBOdW1iZXIoYWNjb21vKVxuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNfX1BTWllfU1RJUEVORF9fIHNwYW4nKS5pbm5lclRleHQgPSBzdGlwZW5kXG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignI19fUFNaWV9TVFVERU5UU19fIHNwYW4nKS5pbm5lclRleHQgPSBzdHVkZW50c1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNfX1BTWllfUFJPSkVDVFNfXyBzcGFuJykuaW5uZXJUZXh0ID0gcHJvamVjdHNcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX0RJU0NJUExJTkVfXyBzcGFuJykuaW5uZXJUZXh0ID0gZGVjb2RlVVJJQ29tcG9uZW50KGRpc2NpcGxpbmUpXG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignI19fUFNaWV9OT1RFX18nKS5pbm5lclRleHQgPSBkZWNvZGVVUklDb21wb25lbnQobm90ZXMpXG4gICAgICAgIHN0YXRzLnJlc3RvcmVkICsrXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gICAgICB9KVxuICAgICAgLy8gc3RhdGlvbnMgcmVtYWluaW5nIGluIGxpc3Qgd2VyZSBhZGRlZCBhZnRlciBiYWNrdXBcbiAgICAgIHN0YXRzLmFkZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NvcnRhYmxlX25hdiA+IGxpJykubGVuZ3RoXG4gICAgICAvLyBhZGQgYmFjayBmcmFnbWVudCB0byB0aGUgdG9wIG9mIHRoaXMgbGlzdFxuICAgICAgaWYgKHN0YXRzLmFkZGVkKSB7XG4gICAgICAgICQoJyNzb3J0YWJsZV9uYXYnKS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsICQoJyNzb3J0YWJsZV9uYXYgPiBsaTpmaXJzdC1jaGlsZCcpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3NvcnRhYmxlX25hdicpLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuICAgICAgfVxuICAgICAgY29ycmVjdFJhbmtzKClcbiAgICAgIGFsZXJ0KGBpbXBvcnRlZCAke2RhdGEubGVuZ3RofSByb3dzLCAke3N0YXRzLnJlc3RvcmVkfSBzdGF0aW9ucyByZXN0b3JlZCBmcm9tIGJhY2t1cCwgJHtzdGF0cy5hZGRlZH0gYWRkZWQgYW5kICR7c3RhdHMuZGVsZXRlZH0gZGVsZXRlZCBzaW5jZSBsYXN0IHZpc2l0YClcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlld1Byb2JsZW1CYW5rKG5vZGUsIHsgb3BlbkluQmFja2dyb3VuZCA9IGZhbHNlIH0gPSB7fSkge1xuICBsZXQgc3RpZCA9IG5vZGUucXVlcnlTZWxlY3RvcignLnNwYW5jbGFzcy51aWljb24nKS5hdHRyaWJ1dGVzLnNwbi52YWx1ZVxuICBsZXQgZmV0Y2hCb2R5ID0geyBTdGF0aW9uSWQ6IHN0aWQgfVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vcHNkLmJpdHMtcGlsYW5pLmFjLmluL1N0dWRlbnQvVmlld0FjdGl2ZVN0YXRpb25Qcm9ibGVtQmFua0RhdGEuYXNweC9nZXRQQlBPUFVQXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcbiAgICB9LFxuICAgIHJlZmVycmVyOiBcImh0dHA6Ly9wc2QuYml0cy1waWxhbmkuYWMuaW4vU3R1ZGVudC9WaWV3QWN0aXZlU3RhdGlvblByb2JsZW1CYW5rRGF0YS5hc3B4XCIsXG4gICAgcmVmZXJyZXJQb2xpY3k6IFwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZldGNoQm9keSksXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBtb2RlOiBcImNvcnNcIixcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcbiAgfSlcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEuZClcbiAgICBpZiAocGFyc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHVybCA9IGBTdGF0aW9ucHJvYmxlbUJhbmtEZXRhaWxzLmFzcHg/Q29tcGFueUlkPSR7cGFyc2VkWzBdLkNvbXBhbnlJZH0mU3RhdGlvbklkPSR7cGFyc2VkWzBdLlN0YXRpb25JZH0mQmF0Y2hJZEZvcj0ke3BhcnNlZFswXS5CYXRjaElkRm9yfSZQU1R5cGVGb3I9JHtwYXJzZWRbMF0uUFNUeXBlRm9yfWBcbiAgICAgIGlmIChvcGVuSW5CYWNrZ3JvdW5kKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9ICQoJyNfX1BTWllfQkdGUkFNRV9fJykgYXMgSFRNTElGcmFtZUVsZW1lbnRcbiAgICAgICAgaWZyYW1lLnNyYyA9IHVybFxuICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5vbmxvYWQgPSBzZXRUaW1lb3V0KCgpID0+IHsgdXBkYXRlU3RhdGlvbkluZm8obm9kZSkuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKSB9LCA1MDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3ID0gd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKVxuICAgICAgICB3Lm9ubG9hZCA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4geyB1cGRhdGVTdGF0aW9uSW5mbyhub2RlKS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoZSkpIH0sIDUwMClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwcm9ibGVtIGJhbmtzIGZvdW5kJylcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0aW9uSW5mbyhub2RlKSB7XG4gIGNvbnN0IHN0aWQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5zcGFuY2xhc3MudWlpY29uJykuYXR0cmlidXRlcy5zcG4udmFsdWVcbiAgY29uc3QgZmV0Y2hCb2R5ID0geyBTdGF0aW9uSWQ6IHN0aWQgfVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vcHNkLmJpdHMtcGlsYW5pLmFjLmluL1N0dWRlbnQvVmlld0FjdGl2ZVN0YXRpb25Qcm9ibGVtQmFua0RhdGEuYXNweC9nZXRQQlBPUFVQXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDFcIixcbiAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwiZW4tVVMsZW47cT0wLjlcIixcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgXCJzZWMtZ3BjXCI6IFwiMVwiLFxuICAgICAgXCJ4LXJlcXVlc3RlZC13aXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgICAgIFwiY2FjaGUtY29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG4gICAgICBcInByYWdtYVwiOiBcIm5vLWNhY2hlXCIsXG4gICAgfSxcbiAgICByZWZlcnJlcjogXCJodHRwOi8vcHNkLmJpdHMtcGlsYW5pLmFjLmluL1N0dWRlbnQvVmlld0FjdGl2ZVN0YXRpb25Qcm9ibGVtQmFua0RhdGEuYXNweFwiLFxuICAgIHJlZmVycmVyUG9saWN5OiBcInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmZXRjaEJvZHkpLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgbW9kZTogXCJjb3JzXCIsXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXG4gIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShkYXRhLmQpXG4gICAgICBpZiAocGFyc2VkLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gcHJvYmxlbSBiYW5rcyBmb3VuZCBmb3IgdGhpcyBzdGF0aW9uXCIpXG4gICAgICBjb25zdCBjdXJyZW50ID0gcGFyc2VkWzBdXG4gICAgICBjb25zdCByZXNwb25zZTEgPSBmZXRjaChcImh0dHA6Ly9wc2QuYml0cy1waWxhbmkuYWMuaW4vU3R1ZGVudC9TdGF0aW9ucHJvYmxlbUJhbmtEZXRhaWxzLmFzcHgvVmlld1BCXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiYWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMVwiLFxuICAgICAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwiZW4tVVMsZW47cT0wLjlcIixcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICBcInNlYy1ncGNcIjogXCIxXCIsXG4gICAgICAgICAgXCJ4LXJlcXVlc3RlZC13aXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcbiAgICAgICAgICBcImNhY2hlLWNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICAgIFwicHJhZ21hXCI6IFwibm8tY2FjaGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJyZXI6IGBodHRwOi8vcHNkLmJpdHMtcGlsYW5pLmFjLmluL1N0dWRlbnQvU3RhdGlvbnByb2JsZW1CYW5rRGV0YWlscy5hc3B4P0NvbXBhbnlJZD0ke2N1cnJlbnQuQ29tcGFueUlkfSZTdGF0aW9uSWQ9JHtjdXJyZW50LlN0YXRpb25JZH0mQmF0Y2hJZEZvcj0ke2N1cnJlbnQuQmF0Y2hJZEZvcn0mUFNUeXBlRm9yPSR7Y3VycmVudC5QU1R5cGVGb3J9YCxcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiLFxuICAgICAgICBib2R5OiBcIntcXFwiYmF0Y2hpZFxcXCI6IFxcXCJ1bmRlZmluZWRcXFwiIH1cIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGZldGNoKFwiaHR0cDovL3BzZC5iaXRzLXBpbGFuaS5hYy5pbi9TdHVkZW50L1N0YXRpb25wcm9ibGVtQmFua0RldGFpbHMuYXNweC9TdGF0aW9uRmFjaWxpdGllc0luZm9cIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJhY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHQsICovKjsgcT0wLjAxXCIsXG4gICAgICAgICAgXCJhY2NlcHQtbGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuOVwiLFxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgICAgIFwic2VjLWdwY1wiOiBcIjFcIixcbiAgICAgICAgICBcIngtcmVxdWVzdGVkLXdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLFxuICAgICAgICAgIFwiY2FjaGUtY29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG4gICAgICAgICAgXCJwcmFnbWFcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICB9LFxuICAgICAgICByZWZlcnJlcjogYGh0dHA6Ly9wc2QuYml0cy1waWxhbmkuYWMuaW4vU3R1ZGVudC9TdGF0aW9ucHJvYmxlbUJhbmtEZXRhaWxzLmFzcHg/Q29tcGFueUlkPSR7Y3VycmVudC5Db21wYW55SWR9JlN0YXRpb25JZD0ke2N1cnJlbnQuU3RhdGlvbklkfSZCYXRjaElkRm9yPSR7Y3VycmVudC5CYXRjaElkRm9yfSZQU1R5cGVGb3I9JHtjdXJyZW50LlBTVHlwZUZvcn1gLFxuICAgICAgICByZWZlcnJlclBvbGljeTogXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIsXG4gICAgICAgIGJvZHk6IFwie1xcXCJTdGF0aW9uSWRcXFwiOiBcXFwiMFxcXCJ9XCIsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcbiAgICAgIH0pXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3Jlc3BvbnNlMSwgcmVzcG9uc2UyXSlcbiAgICB9KVxuICAgIC50aGVuKChbcmVzcG9uc2UxLCByZXNwb25zZTJdKSA9PiBQcm9taXNlLmFsbChbcmVzcG9uc2UxLmpzb24oKSwgcmVzcG9uc2UyLmpzb24oKV0pKVxuICAgIC50aGVuKChbZGF0YTEsIGRhdGEyXSkgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkMSA9IEpTT04ucGFyc2UoZGF0YTEuZClcbiAgICAgIGNvbnN0IHBhcnNlZDIgPSBKU09OLnBhcnNlKGRhdGEyLmQpWzBdXG4gICAgICBjb25zdCB0b3RTdHVkZW50cyA9IHBhcnNlZDE/Lm1hcChwID0+IHAuVG90YWxSZXFkU3R1ZGVudHMpLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIHZhbCkgPz8gJy0nXG4gICAgICBjb25zdCB0YWdzID0gcGFyc2VkMT8ubWFwKHAgPT4gcC5UYWdzLnJlcGxhY2VBbGwoJyAnLCAnJykucmVwbGFjZUFsbCgnLScsICcnKS5yZXBsYWNlQWxsKCdBbnknLCAnJykpLmpvaW4oJywnKVxuICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX1NUSVBFTkRfXyBzcGFuJykuaW5uZXJUZXh0ID0gcGFyc2VkMj8uU3RpcGVuZCA/PyAnLSdcbiAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignI19fUFNaWV9TVFVERU5UU19fIHNwYW4nKS5pbm5lclRleHQgPSB0b3RTdHVkZW50c1xuICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCcjX19QU1pZX1BST0pFQ1RTX18gc3BhbicpLmlubmVyVGV4dCA9IHBhcnNlZDE/LlswXS5Ub3RhbFByb2plY3QgPz8gJy0nXG4gICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJyNfX1BTWllfRElTQ0lQTElORV9fIHNwYW4nKS5pbm5lclRleHQgPSBBcnJheS5mcm9tKG5ldyBTZXQodGFncy5zcGxpdCgnLCcpKSkuZmlsdGVyKHggPT4gISF4KS5qb2luKCcsJykgfHwgJ0FueSdcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsbEFsbFN0YXRpb25JbmZvKCkge1xuICBjb25zdCBhbGxOb2RlcyA9IGdldEFsbEl0ZW1zKClcbiAgYWxsTm9kZXMuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmlld1Byb2JsZW1CYW5rKG4sIHsgb3BlbkluQmFja2dyb3VuZDogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgJCgnI19fUFNaWV9GRVRDSElORk9QUk9HUkVTU19fJykudmFsdWUgPSAoaSArIDEpIC8gYWxsTm9kZXMubGVuZ3RoXG4gICAgICAgICQoJyNfX1BTWllfRkVUQ0hJTkZPUFJPR1JFU1NfXycpLnRpdGxlID0gYCR7aSArIDF9LyR7YWxsTm9kZXMubGVuZ3RofTogYWJvdXQgJHtNYXRoLmNlaWwoKGFsbE5vZGVzLmxlbmd0aCAtIGkpICogMiAvIDYwKX0gbWludXRlcyByZW1haW5pbmdgXG4gICAgICAgIGlmIChpID09PSBhbGxOb2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgJCgnI19fUFNaWV9GRVRDSElORk9QUk9HUkVTU19fJykucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgMjAwMCppKVxuICB9KVxufVxuIiwiLy8gQHRzLW5vY2hlY2tcblxuaW1wb3J0IGdsb2JhbENvbnRyb2xzIGZyb20gJy4vdGVtcGxhdGVzL2dsb2JhbENvbnRyb2xzLmh0bWw/cmF3J1xuaW1wb3J0IGl0ZW1Db250cm9scyBmcm9tICcuL3RlbXBsYXRlcy9pdGVtQ29udHJvbHMuaHRtbD9yYXcnXG5pbXBvcnQgeyAkLCBtb3ZldXAsIG1vdmVkb3duLCBtb3ZldG90b3AsIG1vdmV0b2JvdHRvbSwgbW92ZXN3YXAsIG1vdmV0bywgZXhwb3J0Q3N2LCBpbXBvcnRDc3YsIHNlbGVjdFJhbmdlLCBkZXNlbGVjdFJhbmdlLCBzZWxlY3RQYXR0ZXJuLCBkZXNlbGVjdFBhdHRlcm4sIGRlc2VsZWN0QWxsLCBtb3Zlc2VsZWN0ZWR0bywgbW92ZXNlbGVjdGVkdG9wLCBtb3Zlc2VsZWN0ZWRib3R0b20sIHNlbGVjdE5vZGUsIHZpZXdQcm9ibGVtQmFuaywgZmlsbEFsbFN0YXRpb25JbmZvIH0gZnJvbSAnLi91dGlscydcblxuZnVuY3Rpb24gY2hlY2tzKCkge1xuXHRpZiAoIVsncHNkLmJpdHMtcGlsYW5pLmFjLmluJywgJ2xvY2FsaG9zdCcsICcxMjcuMC4wLjEnXS5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSkpIHtcblx0XHRhbGVydCgnT25seSB3b3JrcyBvbiBodHRwOi8vcHNkLmJpdHMtcGlsYW5pLmFjLmluJylcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGlmICghbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ1N0dWRlbnRTdGF0aW9uUHJlZmVyZW5jZS5hc3B4JykpIHtcblx0XHRhbGVydCgnWW91IG5lZWQgdG8gYmUgb24gRmlsbCBTdGF0aW9uIFByZWZyZW5jZSBwYWdlJylcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGlmICh3aW5kb3cuX19QU1pZU0VUX18gPT09IHRydWUpIHtcblx0XHRhbGVydCgnQWxyZWFkeSByYW4gaGVyZSBvbmNlLiBQbGVhc2UgcmVmcmVzaCcpXG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZXR1cm4gdHJ1ZVxufVxuXG5pZiAoY2hlY2tzKCkpIHtcblxuXHR3aW5kb3cuX19QU1pZU0VUX18gPSB0cnVlXG5cblx0Ly8gZGlzYWJsZSBkZWZhdWx0IHNvcnRpbmcgbGlicmFyeVxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXHRzY3JpcHQuaW5uZXJIVE1MID0gYCQoJyNzb3J0YWJsZV9uYXYnKS5zb3J0YWJsZSgnZGVzdHJveScpOyAkKCcjc29ydGFibGVfbmF2JykuZW5hYmxlU2VsZWN0aW9uKCk7YFxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcblxuXHQvLyBhZGQgZ2xvYmFsIGNvbnRyb2xzXG5cdGNvbnN0IGRpdmlkZXIgPSAkKCcjcnB0bGlzdCA+IC5oci5oci1kb3R0ZWQnKVxuXHRkaXZpZGVyLm91dGVySFRNTCA9IGdsb2JhbENvbnRyb2xzICsgZGl2aWRlci5vdXRlckhUTUxcblxuXHQvLyBhZGQgaXRlbSBjb250cm9sc1xuXHRjb25zdCBsaXMgPSAkKCcjc29ydGFibGVfbmF2JykucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuXHRsaXMuZm9yRWFjaCgobGkpID0+IChsaS5pbm5lckhUTUwgKz0gaXRlbUNvbnRyb2xzKSlcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrUFNaWUNsaWNrcywgZmFsc2UpXG5cblx0ZnVuY3Rpb24gY2hlY2tQU1pZQ2xpY2tzKGUpIHtcblx0XHRzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG5cdFx0XHRjYXNlICdfX1BTWllfQURETk9URV9fJzoge1xuXHRcdFx0XHRjb25zdCBub3RlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJyNfX1BTWllfTk9URV9fJylcblx0XHRcdFx0bm90ZS5mb2N1cygpXG5cdFx0XHRcdGlmIChub3RlLmlubmVyVGV4dC5sZW5ndGggPiAwKSBicmVha1xuXHRcdFx0XHRub3RlLmlubmVyVGV4dCA9ICdFZGl0IG1lJ1xuXHRcdFx0XHQvLyBzZWxlY3QgdGV4dFxuXHRcdFx0XHRjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHRcdHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub3RlKTtcblx0XHRcdFx0Y29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdFx0XHRzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cdFx0XHRcdHNlbC5hZGRSYW5nZShyYW5nZSk7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRjYXNlICdfX1BTWllfTk9URV9fJzpcblx0XHRcdFx0Ly8gaWdub3JlIGNsaWNrXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfTU9WRVVQX18nOlxuXHRcdFx0XHRtb3ZldXAoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX01PVkVET1dOX18nOlxuXHRcdFx0XHRtb3ZlZG93bihlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfVE9QX18nOlxuXHRcdFx0XHRtb3ZldG90b3AoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX0JPVFRPTV9fJzpcblx0XHRcdFx0bW92ZXRvYm90dG9tKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ19fUFNaWV9TV0FQX18nOlxuXHRcdFx0XHRtb3Zlc3dhcChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfTU9WRVRPX18nOlxuXHRcdFx0XHRtb3ZldG8oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX1BCQU5LX18nOlxuXHRcdFx0XHR2aWV3UHJvYmxlbUJhbmsoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLCB7IG9wZW5JbkJhY2tncm91bmQ6IGZhbHNlIH0pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfU1RJUEVORF9fJzpcblx0XHRcdGNhc2UgJ19fUFNaWV9TVFVERU5UU19fJzpcblx0XHRcdGNhc2UgJ19fUFNaWV9QUk9KRUNUU19fJzpcblx0XHRcdGNhc2UgJ19fUFNaWV9ESVNDSVBMSU5FX18nOlxuXHRcdFx0XHR2aWV3UHJvYmxlbUJhbmsoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLCB7IG9wZW5JbkJhY2tncm91bmQ6IHRydWUgfSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ19fUFNaWV9GRVRDSElORk9fXyc6IHtcblx0XHRcdFx0ZmlsbEFsbFN0YXRpb25JbmZvKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19fUFNaWV9FWFBPUlRfXyc6XG5cdFx0XHRcdGV4cG9ydENzdigpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfSU1QT1JUX18nOlxuXHRcdFx0XHRpbXBvcnRDc3YoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX1NFTEVDVFJBTkdFX18nOlxuXHRcdFx0XHRzZWxlY3RSYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfREVTRUxFQ1RSQU5HRV9fJzpcblx0XHRcdFx0ZGVzZWxlY3RSYW5nZSgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfU0VMRUNUUEFUVEVSTl9fJzpcblx0XHRcdFx0c2VsZWN0UGF0dGVybigpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfREVTRUxFQ1RQQVRURVJOX18nOlxuXHRcdFx0XHRkZXNlbGVjdFBhdHRlcm4oKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX0RFU0VMRUNUQUxMX18nOlxuXHRcdFx0XHRkZXNlbGVjdEFsbCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfTU9WRVNFTEVDVEVEX18nOlxuXHRcdFx0XHRtb3Zlc2VsZWN0ZWR0bygpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdfX1BTWllfTU9WRVNFTEVDVEVEVE9QX18nOlxuXHRcdFx0XHRtb3Zlc2VsZWN0ZWR0b3AoKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnX19QU1pZX01PVkVTRUxFQ1RFREJPVFRPTV9fJzpcblx0XHRcdFx0bW92ZXNlbGVjdGVkYm90dG9tKClcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ19fUFNaWV9TQ1JPTExUT1RPUF9fJzpcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRzZWxlY3ROb2RlKGUudGFyZ2V0KVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG59XG4iXSwibmFtZXMiOlsiZ2xvYmFsQ29udHJvbHMiLCJpdGVtQ29udHJvbHMiLCIkIiwic2VsZWN0b3IiLCJlbGVtcyIsIm1vdmVzd2FwIiwibm9kZSIsInRoaXNQb3MiLCJvdGhlclBvcyIsIm90aGVyTm9kZSIsIm1vdmVTZWxlY3RlZCIsImdldFNlbGVjdGVkIiwiZ2V0QWxsSXRlbXMiLCJtb3Zlc2VsZWN0ZWR0byIsIm1vdmVzZWxlY3RlZHRvcCIsIm1vdmVzZWxlY3RlZGJvdHRvbSIsInNlbGVjdGlvbiIsInRvIiwicHJlc2VydmVTZWxlY3Rpb24iLCJyZWNhbGN1bGF0ZVJhbmtzIiwibGlzdENvbnRhaW5lciIsImxpc3QiLCJ0YXJnZXROb2RlIiwiY29ycmVjdFJhbmtzIiwiZ2xvdyIsImRlc2VsZWN0QWxsIiwic2VsZWN0Tm9kZSIsIl9hIiwidXBkYXRlU2VsZWN0ZWRDb3VudCIsImdldFJhbmdlIiwicmFuZ2VzIiwiaW5kaWNlcyIsInNpbmdsZU51bSIsIm51bVJhbmdlIiwibWluIiwibWF4IiwiaSIsInNlbGVjdFJhbmdlIiwiZGVzZWxlY3RSYW5nZSIsImdldFBhdHRlcm4iLCJwYXR0ZXJuIiwic2VsZWN0UGF0dGVybiIsInJlIiwibiIsInRleHQiLCJkZXNlbGVjdFBhdHRlcm4iLCJjb3VudCIsIm1vdmV1cCIsIm5ld1BvcyIsIm1vdmVkb3duIiwibW92ZXRvdG9wIiwibW92ZXRvYm90dG9tIiwibW92ZXRvIiwibmV3Tm9kZVBvcyIsIm5vZGVzIiwibGkiLCJpbmRleCIsImV4cG9ydENzdiIsImRhdGEiLCJpZCIsIm5hbWUiLCJhY2NvbW8iLCJzdGlwZW5kIiwic3R1ZGVudHMiLCJwcm9qZWN0cyIsImRpc2NpcGxpbmUiLCJub3RlcyIsImJsb2IiLCJyb3ciLCJ1cmwiLCJhbmNob3IiLCJpbXBvcnRDc3YiLCJwaWNrZXIiLCJfYiIsImZyYWdtZW50Iiwic3RhdHMiLCJzIiwidmlld1Byb2JsZW1CYW5rIiwib3BlbkluQmFja2dyb3VuZCIsImZldGNoQm9keSIsInJlc3BvbnNlIiwicGFyc2VkIiwiaWZyYW1lIiwidXBkYXRlU3RhdGlvbkluZm8iLCJlIiwidyIsImN1cnJlbnQiLCJyZXNwb25zZTEiLCJyZXNwb25zZTIiLCJkYXRhMSIsImRhdGEyIiwiX2MiLCJwYXJzZWQxIiwicGFyc2VkMiIsInRvdFN0dWRlbnRzIiwicCIsImFjYyIsInZhbCIsInRhZ3MiLCJ4IiwiZmlsbEFsbFN0YXRpb25JbmZvIiwiYWxsTm9kZXMiLCJjaGVja3MiLCJjaGVja1BTWllDbGlja3MiLCJub3RlIiwicmFuZ2UiLCJzZWwiLCJzY3JpcHQiLCJkaXZpZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFlQSxJQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0NBQUMsSUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDRVIsU0FBU0MsRUFBRUMsR0FBVTtBQUNyQixRQUFBQyxJQUFRLFNBQVMsaUJBQWlCRCxDQUFRO0FBQ2hELFNBQU9DLEVBQU0sV0FBVyxJQUFJQSxFQUFNLEtBQUssQ0FBQyxHQUFHQSxDQUFLO0FBQ2pEO0FBRU8sU0FBU0MsRUFBU0MsR0FBTTtBQUM3QixRQUFNQyxJQUFVLFNBQVNELEVBQUssY0FBYyxVQUFVLEVBQUUsU0FBUyxHQUMzREUsSUFBVyxTQUFTLE9BQU8sNkJBQTZCLEdBQUcsRUFBRSxHQUU3REMsSUFET1AsRUFBRSxrQkFBa0IsRUFDVk0sSUFBVztBQUNyQixFQUFBRSxFQUFBLENBQUNKLENBQUksR0FBR0UsR0FBVSxFQUFFLG1CQUFtQixJQUFNLGtCQUFrQixHQUFBLENBQU8sR0FDbkZFLEVBQWEsQ0FBQ0QsQ0FBUyxHQUFHRixHQUFTLEVBQUUsbUJBQW1CLElBQU07QUFDaEU7QUFFTyxTQUFTSSxJQUFjO0FBQzVCLFNBQU9ULEVBQUUsZUFBZSxFQUFFLGlCQUFpQixhQUFhO0FBQzFEO0FBRU8sU0FBU1UsSUFBYztBQUM1QixTQUFPLE1BQU0sS0FBSyxTQUFTLGlCQUFpQixvQkFBb0IsQ0FBQztBQUNuRTtBQUVPLFNBQVNDLElBQWlCO0FBQ2xCLEVBQUFILEVBQUFDLEtBQWUsU0FBU1QsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUN2RTtBQUVPLFNBQVNZLElBQWtCO0FBQ25CLEVBQUFKLEVBQUFDLEtBQWUsQ0FBQztBQUMvQjtBQUVPLFNBQVNJLElBQXFCO0FBQ25DLEVBQUFMLEVBQWFDLEVBQVksR0FBR0MsRUFBWSxFQUFFLE1BQU07QUFDbEQ7QUFFZ0IsU0FBQUYsRUFBYU0sR0FBV0MsR0FBSSxFQUFFLG1CQUFBQyxJQUFvQixJQUFPLGtCQUFBQyxJQUFtQixHQUFTLElBQUEsSUFBSTtBQUNqRyxRQUFBQyxJQUFnQmxCLEVBQUUsZUFBZTtBQUN2QyxNQUFJbUIsSUFBT1Q7QUFFUCxNQUFBSSxFQUFVLFVBQVU7QUFDdEIsV0FBTyxNQUFNLDZCQUE2QjtBQUV4QyxNQUFBLENBQUMsT0FBTyxVQUFVQyxDQUFFLEtBQUssTUFBTUEsQ0FBRSxLQUFLQSxJQUFLO0FBQzdDLFdBQU8sTUFBTSxpQ0FBaUM7QUFFNUMsTUFBQUEsSUFBS0ksRUFBSztBQUNaLFdBQU8sTUFBTSwyQ0FBMkM7QUFPdEQsTUFKSkwsRUFBVSxRQUFRLENBQVFWLE1BQUE7QUFDeEIsSUFBQWMsRUFBYyxZQUFZZCxDQUFJO0FBQUEsRUFBQSxDQUMvQixHQUNEZSxJQUFPVCxFQUFZLEdBQ2ZLLElBQUtJLEVBQUssUUFBUTtBQUNkLFVBQUFDLElBQWFELEVBQUtKLElBQUs7QUFDN0IsSUFBQUQsRUFBVSxRQUFRLENBQVFWLE1BQUE7QUFDVixNQUFBYyxFQUFBLGFBQWFkLEdBQU1nQixDQUFVO0FBQUEsSUFBQSxDQUM1QztBQUFBLEVBQUE7QUFFRCxJQUFBTixFQUFVLFFBQVEsQ0FBUVYsTUFBQTtBQUN4QixNQUFBYyxFQUFjLFlBQVlkLENBQUk7QUFBQSxJQUFBLENBQy9CO0FBRUMsRUFBQWEsS0FBK0JJLEtBQ25DQyxFQUFLLEdBQUdSLENBQVMsR0FDWkUsS0FBK0JPO0FBQ3RDO0FBRU8sU0FBU0MsRUFBV3BCLEdBQU07QUZyRWpDLE1BQUFxQjtBRXVFTSxFQUFBckIsRUFBSyxRQUFRLGtCQUFrQixPQUVuQ3FCLElBQUFyQixFQUFLLFFBQVEsb0JBQW9CLE1BQWpDLFFBQUFxQixFQUFvQyxVQUFVLE9BQU8sYUFDakNDO0FBQ3RCO0FBRU8sU0FBU0gsSUFBYztBQUM1QixFQUFBZCxJQUFjLFFBQVEsQ0FBQUwsTUFBUUEsRUFBSyxVQUFVLE9BQU8sVUFBVSxDQUFDLEdBQzNDc0I7QUFDdEI7QUFFTyxTQUFTQyxJQUFXO0FBQ3pCLFFBQU1DLElBQVM1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxHQUFHLEdBQzdDNkIsSUFBVSxDQUFBO0FBQ2hCLFNBQUFELEVBQU8sUUFBUSxDQUFLLE1BQUE7QUFDbEIsUUFBSSxFQUFFO0FBR0EsVUFBQUUsSUFBWSxFQUFFLE1BQU0sVUFBVTtBQUNwQyxRQUFJQSxNQUFjLE1BQU07QUFDdEIsTUFBQUQsRUFBUSxLQUFLLFNBQVNDLEVBQVUsRUFBRSxDQUFDO0FBQ25DO0FBQUEsSUFDRjtBQUdNLFVBQUFDLElBQVcsRUFBRSxNQUFNLHNCQUFzQjtBQUMvQyxRQUFJQSxNQUFhLE1BQU07QUFDZixZQUFBQyxJQUFNLFNBQVNELEVBQVMsRUFBRSxHQUMxQkUsSUFBTSxTQUFTRixFQUFTLEVBQUU7QUFDaEMsZUFBU0csSUFBSUYsR0FBS0UsS0FBS0QsR0FBS0M7QUFDMUIsUUFBQUwsRUFBUSxLQUFLSyxDQUFDO0FBRWhCO0FBQUEsSUFDRjtBQUFBLEVBQUEsQ0FDRCxHQUNNTDtBQUNUO0FBRU8sU0FBU00sSUFBYztBQUM1QixRQUFNaEIsSUFBT1Q7QUFDSixFQUFBaUIsRUFBQSxFQUFFLFFBQVEsQ0FBS08sTUFBQTtBQUV0QixJQUFBZixFQUFLZSxJQUFJLEdBQUcsVUFBVSxJQUFJLFVBQVU7QUFBQSxFQUFBLENBQ3JDLEdBQ21CUjtBQUN0QjtBQUVPLFNBQVNVLElBQWdCO0FBQzlCLFFBQU1qQixJQUFPVDtBQUNKLEVBQUFpQixFQUFBLEVBQUUsUUFBUSxDQUFLTyxNQUFBO0FBRXRCLElBQUFmLEVBQUtlLElBQUksR0FBRyxVQUFVLE9BQU8sVUFBVTtBQUFBLEVBQUEsQ0FDeEMsR0FDbUJSO0FBQ3RCO0FBRU8sU0FBU1csSUFBYTtBQUNyQixRQUFBQyxJQUFVdEMsRUFBRSxtQkFBbUIsRUFBRTtBQUNoQyxTQUFBLElBQUksT0FBT3NDLEdBQVMsSUFBSTtBQUNqQztBQUVPLFNBQVNDLElBQWdCO0FBQzlCLFFBQU1wQixJQUFPVCxLQUNQOEIsSUFBS0g7QUFDWCxFQUFBbEIsRUFBSyxRQUFRLENBQUtzQixNQUFBO0FBQ2hCLFVBQU1DLElBQU9ELEVBQUUsY0FBYyxnQkFBZ0IsRUFBRTtBQUMzQyxJQUFBRCxFQUFHLEtBQUtFLENBQUksS0FDWkQsRUFBQSxVQUFVLElBQUksVUFBVTtBQUFBLEVBQzVCLENBQ0QsR0FDbUJmO0FBQ3RCO0FBRU8sU0FBU2lCLElBQWtCO0FBQ2hDLFFBQU14QixJQUFPVCxLQUNQOEIsSUFBS0g7QUFDWCxFQUFBbEIsRUFBSyxRQUFRLENBQUtzQixNQUFBO0FBQ2hCLFVBQU1DLElBQU9ELEVBQUUsY0FBYyxnQkFBZ0IsRUFBRTtBQUMzQyxJQUFBRCxFQUFHLEtBQUtFLENBQUksS0FDWkQsRUFBQSxVQUFVLE9BQU8sVUFBVTtBQUFBLEVBQy9CLENBQ0QsR0FDbUJmO0FBQ3RCO0FBRU8sU0FBU0EsSUFBc0I7QUFDOUIsUUFBQWtCLElBQVFuQyxFQUFjLEVBQUE7QUFDNUIsRUFBQVQsRUFBRSx5QkFBeUIsRUFBRSxZQUFZNEMsRUFBTSxTQUFTO0FBQzFEO0FBRU8sU0FBU0MsRUFBT3pDLEdBQU07QUFDM0IsUUFBTTBDLElBQVMsU0FBUzFDLEVBQUssZ0JBQWdCLGNBQWMsVUFBVSxFQUFFLFNBQVM7QUFDaEYsRUFBQUksRUFBYSxDQUFDSixDQUFJLEdBQUcwQyxHQUFRLEVBQUUsbUJBQW1CLElBQU0sR0FDeEQsT0FBTyxTQUFTO0FBQUEsSUFDZCxLQUFLLEtBQUsxQyxFQUFLO0FBQUEsSUFDZixVQUFVO0FBQUEsRUFBQSxDQUNYO0FBQ0g7QUFFTyxTQUFTMkMsRUFBUzNDLEdBQU07QUFDN0IsUUFBTTBDLElBQVMsU0FBUzFDLEVBQUssWUFBWSxjQUFjLFVBQVUsRUFBRSxTQUFTO0FBQzVFLEVBQUFJLEVBQWEsQ0FBQ0osQ0FBSSxHQUFHMEMsR0FBUSxFQUFFLG1CQUFtQixJQUFNLEdBQ3hELE9BQU8sU0FBUztBQUFBLElBQ2QsS0FBSzFDLEVBQUs7QUFBQSxJQUNWLFVBQVU7QUFBQSxFQUFBLENBQ1g7QUFDSDtBQUVPLFNBQVM0QyxFQUFVNUMsR0FBTTtBQUM5QixFQUFBSSxFQUFhLENBQUNKLENBQUksR0FBRyxHQUFHLEVBQUUsbUJBQW1CLElBQU07QUFDckQ7QUFFTyxTQUFTNkMsRUFBYTdDLEdBQU07QUFDcEIsRUFBQUksRUFBQSxDQUFDSixDQUFJLEdBQUdNLEVBQUEsRUFBYyxRQUFRLEVBQUUsbUJBQW1CLEdBQUEsQ0FBTTtBQUN4RTtBQUVPLFNBQVN3QyxFQUFPOUMsR0FBTTtBQUMzQixRQUFNK0MsSUFBYSxTQUFTLE9BQU8sbUJBQW1CLEdBQUcsRUFBRTtBQUMzRCxFQUFBM0MsRUFBYSxDQUFDSixDQUFJLEdBQUcrQyxHQUFZLEVBQUUsbUJBQW1CLElBQU07QUFDOUQ7QUFFTyxTQUFTN0IsS0FBUThCLEdBQU87QUFDdkIsRUFBQUEsRUFBQSxRQUFRLENBQUNoRCxNQUFTO0FBQ2pCLElBQUFBLEVBQUEsVUFBVSxJQUFJLE1BQU0sR0FDekIsV0FBVyxNQUFNO0FBQ1YsTUFBQUEsRUFBQSxVQUFVLE9BQU8sTUFBTTtBQUFBLE9BQzNCLEdBQUc7QUFBQSxFQUFBLENBQ1A7QUFDSDtBQUVPLFNBQVNpQixJQUFlO0FBQzdCLEVBQUFyQixFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQ3FELEdBQUlDLE1BQVU7QUFDN0MsSUFBQUQsRUFBRyxjQUFjLFVBQVUsRUFBRSxZQUFZQyxJQUFRLEdBQ2pERCxFQUFHLGNBQWMsZ0JBQWdCLEVBQUUsYUFBYSxPQUFPQyxJQUFRLENBQUM7QUFBQSxFQUFBLENBQ2pFO0FBQ0g7QUFFTyxTQUFTQyxJQUFZO0FBQzFCLFFBQU1wQyxJQUFPVCxLQUNQOEMsSUFBTyxDQUFDLENBQUMsTUFBTSxRQUFRLFVBQVUsV0FBVyxZQUFZLFlBQVksZUFBZSxPQUFPLENBQUM7QUFDakcsRUFBQXJDLEVBQUssUUFBUSxDQUFLc0IsTUFBQTtBQUNoQixVQUFNZ0IsSUFBS2hCLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxhQUFhLEtBQUssR0FDekRpQixJQUFPLG1CQUFtQmpCLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxTQUFTLEdBQ3JFa0IsSUFBUyxPQUFPbEIsRUFBRSxjQUFjLHdCQUF3QixFQUFFLE9BQU8sR0FDakVtQixJQUFVbkIsRUFBRSxjQUFjLHdCQUF3QixFQUFFLFdBQ3BEb0IsSUFBV3BCLEVBQUUsY0FBYyx5QkFBeUIsRUFBRSxXQUN0RHFCLElBQVdyQixFQUFFLGNBQWMseUJBQXlCLEVBQUUsV0FDdERzQixJQUFhLG1CQUFtQnRCLEVBQUUsY0FBYywyQkFBMkIsRUFBRSxTQUFTLEdBQ3RGdUIsSUFBUSxtQkFBbUJ2QixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsU0FBUztBQUN2RSxJQUFBZSxFQUFBLEtBQUssQ0FBQ0MsR0FBSUMsR0FBTUMsR0FBUUMsR0FBU0MsR0FBVUMsR0FBVUMsR0FBWUMsQ0FBSyxDQUFDO0FBQUEsRUFBQSxDQUM3RTtBQUNLLFFBQUFDLElBQU8sSUFBSSxLQUFLLENBQUNULEVBQUssSUFBSSxDQUFBVSxNQUFPQSxFQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSztBQUFBLENBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxhQUFhLFNBQVMsU0FBQSxDQUFVLEdBQ3JHQyxJQUFNLElBQUksZ0JBQWdCRixDQUFJLEdBQzlCRyxJQUFTLFNBQVMsY0FBYyxHQUFHO0FBQ3pDLEVBQUFBLEVBQU8sT0FBT0QsR0FDZEMsRUFBTyxXQUFXLDJCQUNULFNBQUEsS0FBSyxZQUFZQSxDQUFNLEdBQ2hDQSxFQUFPLE1BQU0sR0FDYkEsRUFBTyxPQUFPLEdBQ2QsSUFBSSxnQkFBZ0JELENBQUc7QUFDekI7QUFRTyxTQUFTRSxJQUFZO0FBQ3BCLFFBQUFDLElBQVN0RSxFQUFFLGdCQUFnQjtBQUNqQyxFQUFBc0UsRUFBTyxNQUFNLEdBQ05BLEVBQUEsaUJBQWlCLFVBQVUsTUFBTTtBRmxQMUMsUUFBQTdDLEdBQUE4QztBRW1QSSxLQUFBQSxLQUFBOUMsSUFBQTZDLEVBQU8sVUFBUCxnQkFBQTdDLEVBQWUsT0FBZixRQUFBOEMsRUFBbUIsT0FBTyxLQUFLLENBQVE3QixNQUFBO0FBQ2pDLFVBQUEsQ0FBQ0EsRUFBSyxXQUFXLDREQUE0RDtBQUFHLGVBQU8sTUFBTSxVQUFVO0FBRXJHLFlBQUE4QixJQUFXLFNBQVMsMEJBQ3BCQyxJQUFRO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFBQSxHQUVMakIsSUFBT2QsRUFBSyxLQUFLLEVBQUUsTUFBTTtBQUFBLENBQUksRUFBRSxJQUFJLENBQUFnQyxNQUFLQSxFQUFFLEtBQUEsRUFBTyxNQUFNLEdBQUcsQ0FBQztBQUNqRSxNQUFBbEIsRUFBSyxNQUFNLEdBQ1hBLEVBQUssUUFBUSxDQUFPVSxNQUFBO0FGOVAxQixZQUFBekM7QUUrUGMsY0FBQSxDQUFDZ0MsR0FBSUMsR0FBTUMsR0FBUUMsR0FBU0MsR0FBVUMsR0FBVUMsR0FBWUMsQ0FBSyxJQUFJRSxHQUNyRTlELEtBQU9xQixJQUFBekIsRUFBRSxlQUFlLEVBQUUsY0FBYyx1QkFBdUJ5RCxLQUFNLE1BQTlELGdCQUFBaEMsRUFBaUU7QUFDOUUsWUFBSSxDQUFDckIsR0FBTTtBQUVILFVBQUFxRSxFQUFBO0FBQ047QUFBQSxRQUNGO0FBQ0EsUUFBQXJFLEVBQUssY0FBYyx3QkFBd0IsRUFBRSxVQUFVLE9BQU91RCxDQUFNLEdBQy9EdkQsRUFBQSxjQUFjLHdCQUF3QixFQUFFLFlBQVl3RCxHQUNwRHhELEVBQUEsY0FBYyx5QkFBeUIsRUFBRSxZQUFZeUQsR0FDckR6RCxFQUFBLGNBQWMseUJBQXlCLEVBQUUsWUFBWTBELEdBQzFEMUQsRUFBSyxjQUFjLDJCQUEyQixFQUFFLFlBQVksbUJBQW1CMkQsQ0FBVSxHQUN6RjNELEVBQUssY0FBYyxnQkFBZ0IsRUFBRSxZQUFZLG1CQUFtQjRELENBQUssR0FDbkVTLEVBQUEsWUFDTkQsRUFBUyxZQUFZcEUsQ0FBSTtBQUFBLE1BQUEsQ0FDMUIsR0FFRHFFLEVBQU0sUUFBUSxTQUFTLGlCQUFpQixvQkFBb0IsRUFBRSxRQUUxREEsRUFBTSxRQUNSekUsRUFBRSxlQUFlLEVBQUUsYUFBYXdFLEdBQVV4RSxFQUFFLGdDQUFnQyxDQUFDLElBRTNFQSxFQUFBLGVBQWUsRUFBRSxZQUFZd0UsQ0FBUSxHQUU1Qm5ELEtBQ1AsTUFBQSxZQUFZbUMsRUFBSyxnQkFBZ0JpQixFQUFNLDJDQUEyQ0EsRUFBTSxtQkFBbUJBLEVBQU0sa0NBQWtDO0FBQUEsSUFBQTtBQUFBLEVBQzFKLENBQ0Y7QUFDSDtBQUVPLFNBQVNFLEVBQWdCdkUsR0FBTSxFQUFFLGtCQUFBd0UsSUFBbUIsR0FBTSxJQUFJLENBQUEsR0FBSTtBQUVuRSxNQUFBQyxJQUFZLEVBQUUsV0FEUHpFLEVBQUssY0FBYyxtQkFBbUIsRUFBRSxXQUFXLElBQUk7QUFFbEUsU0FBTyxNQUFNLHlGQUF5RjtBQUFBLElBQ3BHLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNoQixNQUFNLEtBQUssVUFBVXlFLENBQVM7QUFBQSxJQUM5QixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsRUFBQSxDQUNkLEVBQ0EsS0FBSyxDQUFBQyxNQUFZQSxFQUFTLE1BQU0sRUFDaEMsS0FBSyxDQUFRdEIsTUFBQTtBQUNaLFVBQU11QixJQUFTLEtBQUssTUFBTXZCLEVBQUssQ0FBQztBQUM1QixRQUFBdUIsRUFBTyxTQUFTLEdBQUc7QUFDckIsWUFBTVosSUFBTSw0Q0FBNENZLEVBQU8sR0FBRyx1QkFBdUJBLEVBQU8sR0FBRyx3QkFBd0JBLEVBQU8sR0FBRyx3QkFBd0JBLEVBQU8sR0FBRztBQUN2SyxVQUFJSCxHQUFrQjtBQUNkLGNBQUFJLElBQVNoRixFQUFFLG1CQUFtQjtBQUNwQyxRQUFBZ0YsRUFBTyxNQUFNYixHQUNOYSxFQUFBLGNBQWMsU0FBUyxXQUFXLE1BQU07QUFBRSxVQUFBQyxFQUFrQjdFLENBQUksRUFBRSxNQUFNLE9BQUssUUFBUSxNQUFNOEUsQ0FBQyxDQUFDO0FBQUEsV0FBSyxHQUFHO0FBQUEsTUFBQSxPQUN2RztBQUNMLGNBQU1DLElBQUksT0FBTyxLQUFLaEIsR0FBSyxRQUFRO0FBQ2pDLFFBQUFnQixFQUFBLFNBQVMsTUFBTSxXQUFXLE1BQU07QUFBRSxVQUFBRixFQUFrQjdFLENBQUksRUFBRSxNQUFNLE9BQUssUUFBUSxNQUFNOEUsQ0FBQyxDQUFDO0FBQUEsV0FBSyxHQUFHO0FBQUEsTUFDakc7QUFBQSxJQUFBO0FBRU0sWUFBQSxJQUFJLE1BQU0sd0JBQXdCO0FBQUEsRUFDMUMsQ0FDRDtBQUNIO0FBRU8sU0FBU0QsRUFBa0I3RSxHQUFNO0FBRWhDLFFBQUF5RSxJQUFZLEVBQUUsV0FEUHpFLEVBQUssY0FBYyxtQkFBbUIsRUFBRSxXQUFXLElBQUk7QUFFcEUsU0FBTyxNQUFNLHlGQUF5RjtBQUFBLElBQ3BHLFNBQVM7QUFBQSxNQUNQLFFBQVU7QUFBQSxNQUNWLG1CQUFtQjtBQUFBLE1BQ25CLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQSxNQUNYLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUNoQixNQUFNLEtBQUssVUFBVXlFLENBQVM7QUFBQSxJQUM5QixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsRUFBQSxDQUNkLEVBQ0UsS0FBSyxDQUFBQyxNQUFZQSxFQUFTLE1BQU0sRUFDaEMsS0FBSyxDQUFRdEIsTUFBQTtBQUNaLFVBQU11QixJQUFTLEtBQUssTUFBTXZCLEVBQUssQ0FBQztBQUNoQyxRQUFJdUIsRUFBTyxXQUFXO0FBQVMsWUFBQSxJQUFJLE1BQU0seUNBQXlDO0FBQ2xGLFVBQU1LLElBQVVMLEVBQU8sSUFDakJNLElBQVksTUFBTSw4RUFBOEU7QUFBQSxNQUNwRyxTQUFTO0FBQUEsUUFDUCxRQUFVO0FBQUEsUUFDVixtQkFBbUI7QUFBQSxRQUNuQixnQkFBZ0I7QUFBQSxRQUNoQixXQUFXO0FBQUEsUUFDWCxvQkFBb0I7QUFBQSxRQUNwQixpQkFBaUI7QUFBQSxRQUNqQixRQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsVUFBVSxpRkFBaUZELEVBQVEsdUJBQXVCQSxFQUFRLHdCQUF3QkEsRUFBUSx3QkFBd0JBLEVBQVE7QUFBQSxNQUNsTSxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsSUFBQSxDQUNkLEdBQ0tFLElBQVksTUFBTSw2RkFBNkY7QUFBQSxNQUNuSCxTQUFTO0FBQUEsUUFDUCxRQUFVO0FBQUEsUUFDVixtQkFBbUI7QUFBQSxRQUNuQixnQkFBZ0I7QUFBQSxRQUNoQixXQUFXO0FBQUEsUUFDWCxvQkFBb0I7QUFBQSxRQUNwQixpQkFBaUI7QUFBQSxRQUNqQixRQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsVUFBVSxpRkFBaUZGLEVBQVEsdUJBQXVCQSxFQUFRLHdCQUF3QkEsRUFBUSx3QkFBd0JBLEVBQVE7QUFBQSxNQUNsTSxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsSUFBQSxDQUNkO0FBQ0QsV0FBTyxRQUFRLElBQUksQ0FBQ0MsR0FBV0MsQ0FBUyxDQUFDO0FBQUEsRUFBQSxDQUMxQyxFQUNBLEtBQUssQ0FBQyxDQUFDRCxHQUFXQyxDQUFTLE1BQU0sUUFBUSxJQUFJLENBQUNELEVBQVUsUUFBUUMsRUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2xGLEtBQUssQ0FBQyxDQUFDQyxHQUFPQyxDQUFLLE1BQU07QUY1WDlCLFFBQUEvRCxHQUFBOEMsR0FBQWtCO0FFNlhNLFVBQU1DLElBQVUsS0FBSyxNQUFNSCxFQUFNLENBQUMsR0FDNUJJLElBQVUsS0FBSyxNQUFNSCxFQUFNLENBQUMsRUFBRSxJQUM5QkksS0FBY25FLElBQUFpRSxLQUFBLGdCQUFBQSxFQUFTLElBQUksQ0FBQUcsTUFBS0EsRUFBRSxtQkFBbUIsT0FBTyxDQUFDQyxHQUFLQyxNQUFRRCxJQUFNQyxPQUFsRSxPQUFBdEUsSUFBMEUsS0FDeEZ1RSxJQUFPTixLQUFBLGdCQUFBQSxFQUFTLElBQUksQ0FBQUcsTUFBS0EsRUFBRSxLQUFLLFdBQVcsS0FBSyxFQUFFLEVBQUUsV0FBVyxLQUFLLEVBQUUsRUFBRSxXQUFXLE9BQU8sRUFBRSxHQUFHLEtBQUs7QUFDMUcsSUFBQXpGLEVBQUssY0FBYyx3QkFBd0IsRUFBRSxhQUFZbUUsSUFBQW9CLEtBQUEsZ0JBQUFBLEVBQVMsWUFBVCxPQUFBcEIsSUFBb0IsS0FDeEVuRSxFQUFBLGNBQWMseUJBQXlCLEVBQUUsWUFBWXdGLEdBQzFEeEYsRUFBSyxjQUFjLHlCQUF5QixFQUFFLGFBQVlxRixJQUFBQyxLQUFBLGdCQUFBQSxFQUFVLEdBQUcsaUJBQWIsT0FBQUQsSUFBNkIsS0FDbEZyRixFQUFBLGNBQWMsMkJBQTJCLEVBQUUsWUFBWSxNQUFNLEtBQUssSUFBSSxJQUFJNEYsRUFBSyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFLQyxNQUFBLENBQUMsQ0FBQ0EsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLO0FBQUEsRUFBQSxDQUNoSTtBQUNMO0FBRU8sU0FBU0MsSUFBcUI7QUFDbkMsUUFBTUMsSUFBV3pGO0FBQ1IsRUFBQXlGLEVBQUEsUUFBUSxDQUFDLEdBQUdqRSxNQUFNO0FBQ3pCLGVBQVcsTUFBTTtBQUNmLE1BQUF5QyxFQUFnQixHQUFHLEVBQUUsa0JBQWtCLEdBQU0sQ0FBQSxFQUFFLEtBQUssTUFBTTtBQUN4RCxRQUFBM0UsRUFBRSw2QkFBNkIsRUFBRSxTQUFTa0MsSUFBSSxLQUFLaUUsRUFBUyxRQUM1RG5HLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxHQUFHa0MsSUFBSSxLQUFLaUUsRUFBUyxpQkFBaUIsS0FBSyxNQUFNQSxFQUFTLFNBQVNqRSxLQUFLLElBQUksRUFBRSx1QkFDbkhBLE1BQU1pRSxFQUFTLFNBQVMsS0FDeEJuRyxFQUFBLDZCQUE2QixFQUFFLGdCQUFnQixPQUFPO0FBQUEsTUFDMUQsQ0FDRDtBQUFBLElBQUEsR0FDQSxNQUFLa0MsQ0FBQztBQUFBLEVBQUEsQ0FDVjtBQUNIO0FDL1lBLFNBQVNrRSxJQUFTO0FBQ2IsU0FBQyxDQUFDLHlCQUF5QixhQUFhLFdBQVcsRUFBRSxTQUFTLFNBQVMsUUFBUSxJQUs5RSxTQUFTLFNBQVMsU0FBUywrQkFBK0IsSUFLM0QsT0FBTyxnQkFBZ0IsTUFDMUIsTUFBTSx1Q0FBdUMsR0FDdEMsTUFHRCxNQVROLE1BQU0sK0NBQStDLEdBQzlDLE9BTlAsTUFBTSw0Q0FBNEMsR0FDM0M7QUFjVDtBQUVBLElBQUlBLEtBQVU7QUFtQkosTUFBQUMsSUFBVCxTQUF5Qm5CLEdBQUc7QUFDbkIsWUFBQUEsRUFBRSxPQUFPLElBQUk7QUFBQSxNQUNwQixLQUFLLG9CQUFvQjtBQUN4QixjQUFNb0IsSUFBT3BCLEVBQUUsT0FBTyxXQUFXLFdBQVcsY0FBYyxnQkFBZ0I7QUFFdEUsWUFESm9CLEVBQUssTUFBTSxHQUNQQSxFQUFLLFVBQVUsU0FBUztBQUFHO0FBQy9CLFFBQUFBLEVBQUssWUFBWTtBQUVYLGNBQUFDLElBQVEsU0FBUztBQUN2QixRQUFBQSxFQUFNLG1CQUFtQkQsQ0FBSTtBQUN2QixjQUFBRSxJQUFNLE9BQU87QUFDbkIsUUFBQUEsRUFBSSxnQkFBZ0IsR0FDcEJBLEVBQUksU0FBU0QsQ0FBSztBQUNsQjtBQUFBLE1BQ0Q7QUFBQSxNQUNBLEtBQUs7QUFFSjtBQUFBLE1BQ0QsS0FBSztBQUNHLFFBQUExRCxFQUFBcUMsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUNyQztBQUFBLE1BQ0QsS0FBSztBQUNLLFFBQUFuQyxFQUFBbUMsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUN2QztBQUFBLE1BQ0QsS0FBSztBQUNNLFFBQUFsQyxFQUFBa0MsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUN4QztBQUFBLE1BQ0QsS0FBSztBQUNTLFFBQUFqQyxFQUFBaUMsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUMzQztBQUFBLE1BQ0QsS0FBSztBQUNLLFFBQUEvRSxFQUFBK0UsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUN2QztBQUFBLE1BQ0QsS0FBSztBQUNHLFFBQUFoQyxFQUFBZ0MsRUFBRSxPQUFPLFdBQVcsVUFBVTtBQUNyQztBQUFBLE1BQ0QsS0FBSztBQUNKLFFBQUFQLEVBQWdCTyxFQUFFLE9BQU8sV0FBVyxZQUFZLEVBQUUsa0JBQWtCLElBQU87QUFDM0U7QUFBQSxNQUNELEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFDSixRQUFBUCxFQUFnQk8sRUFBRSxPQUFPLFdBQVcsWUFBWSxFQUFFLGtCQUFrQixJQUFNO0FBQzFFO0FBQUEsTUFDRCxLQUFLLHNCQUFzQjtBQUNQLFFBQUFnQjtBQUNuQjtBQUFBLE1BQ0Q7QUFBQSxNQUNBLEtBQUs7QUFDTSxRQUFBM0M7QUFDVjtBQUFBLE1BQ0QsS0FBSztBQUNNLFFBQUFjO0FBQ1Y7QUFBQSxNQUNELEtBQUs7QUFDUSxRQUFBbEM7QUFDWjtBQUFBLE1BQ0QsS0FBSztBQUNVLFFBQUFDO0FBQ2Q7QUFBQSxNQUNELEtBQUs7QUFDVSxRQUFBRztBQUNkO0FBQUEsTUFDRCxLQUFLO0FBQ1ksUUFBQUk7QUFDaEI7QUFBQSxNQUNELEtBQUs7QUFDUSxRQUFBcEI7QUFDWjtBQUFBLE1BQ0QsS0FBSztBQUNXLFFBQUFaO0FBQ2Y7QUFBQSxNQUNELEtBQUs7QUFDWSxRQUFBQztBQUNoQjtBQUFBLE1BQ0QsS0FBSztBQUNlLFFBQUFDO0FBQ25CO0FBQUEsTUFDRCxLQUFLO0FBQ0osZUFBTyxTQUFTO0FBQUEsVUFDZixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsUUFBQSxDQUNWO0FBQ0Q7QUFBQSxNQUNEO0FBQ0MsUUFBQVcsRUFBVzBELEVBQUUsTUFBTTtBQUNuQjtBQUFBLElBQ0Y7QUFBQSxFQUFBO0FBMUdELFNBQU8sY0FBYztBQUdmLFFBQUF1QixJQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLEVBQUFBLEVBQU8sWUFBWSxpRkFDVixTQUFBLEtBQUssWUFBWUEsQ0FBTTtBQUcxQixRQUFBQyxJQUFVMUcsRUFBRSwwQkFBMEI7QUFDcEMsRUFBQTBHLEVBQUEsWUFBWTVHLElBQWlCNEcsRUFBUSxXQUdqQzFHLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixJQUFJLEVBQ2hELFFBQVEsQ0FBQ3FELE1BQVFBLEVBQUcsYUFBYXRELENBQWEsR0FFekMsU0FBQSxpQkFBaUIsU0FBU3NHLEdBQWlCLEVBQUs7QUE4RjFEOyJ9
