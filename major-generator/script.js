const _selectedStateTemplate = `
<div id="selected-state">
  <h4 id="selected-track-major-heading">Adding {{lowerCaseTrack}} to a {{major}} major guarantees:</h4>
  <div id="selected-track-major-details">
    <div id="content">
      {{text}}
      <div id="explore-track-section">
        <button id="explore-track-button" onclick="">Explore {{upperCasetrack}} ➔</button>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-left">{{gainAmount}}</div>
    <div class="footer-right">
      {{gainStatement}}
    </div>
  </div>
</div>`

// Adds majors from array to major select dropdown
var majorSelect = document.getElementById("major");
for (var i = 0; i < data.majors.length; i++) {
  var opt = data.majors[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  majorSelect.appendChild(el);
}

// Adds tracks from array to track select dropdown
var trackSelect = document.getElementById("track");
for (var i = 0; i < data.tracks.length; i++) {
  var opt = data.tracks[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  trackSelect.appendChild(el);
}

function showSelection() {

  const elementToRemove = document.getElementById("empty-state") || document.getElementById("selected-state");
  elementToRemove.remove();

  var text = data.reasons[majorSelect.value][trackSelect.value].text;
  var gainAmount = data.reasons[majorSelect.value][trackSelect.value].gainAmount;
  var gainStatement = data.reasons[majorSelect.value][trackSelect.value].gainStatement;

  let newHTML = _selectedStateTemplate
    .replaceAll("{{lowerCaseTrack}}", trackSelect.value.toLowerCase())
    .replaceAll("{{major}}", majorSelect.value.toLowerCase())
    .replaceAll("{{text}}", text)
    .replaceAll("{{upperCasetrack}}", trackSelect.value)
    .replaceAll("{{gainAmount}}", gainAmount)
    .replaceAll("{{gainStatement}}", gainStatement)

  document.getElementById("column2").innerHTML = newHTML;
}