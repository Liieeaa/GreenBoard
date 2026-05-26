// TAB SWITCH
function showTab(id, btn){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
}

// KW
const now = new Date();
const kw = Math.ceil((((now - new Date(now.getFullYear(),0,1))/86400000)+1)/7);
document.getElementById("kwBadge").textContent = "KW " + kw;

// SCORE
function scoreRow(row){
  let pts = 0;
  return pts;
}

// FILE UPLOAD
function handleFile(e){
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(evt){
    const data = new Uint8Array(evt.target.result);
    const wb = XLSX.read(data,{type:'array'});
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws);

    document.getElementById("fileStatus").innerText =
      "Geladen: " + rows.length + " Zeilen";
  };

  reader.readAsArrayBuffer(file);
}
