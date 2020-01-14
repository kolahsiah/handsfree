const Handsfree = window.Handsfree

/**
 * Creates a calibrator panel
 */
Handsfree.prototype.createCalibrator = function() {
  if (!this.calibrator.target) {
    // Wrap
    this.calibrator.wrap = document.createElement('DIV')
    this.calibrator.wrap.classList.add('handsfree-calibrator-wrap')

    // Instructions
    let $p = document.createElement('p')
    $p.innerHTML = this.calibrator.instructions
    this.calibrator.wrap.appendChild($p)

    // Marker
    let $marker = document.createElement('DIV')
    $marker.classList.add('handsfree-calibrator-marker')
    this.calibrator.marker = $marker
    this.calibrator.wrap.appendChild($marker)

    document.body.appendChild(this.calibrator.wrap)
  }
}

/**
 * Starts the calibration process
 * - Shows calibration overlay
 */
Handsfree.prototype.startCalibration = function() {
  this.isStarted && this.calibrator.wrap.classList.add('handsfree-visible')
}
