function getImageSize (adjustedWidth, width, height) {
	let divided = width / adjustedWidth
	let adjustedHeight = height / divided

	console.info(`adjusted Width ${adjustedWidth}`)
  console.info(`adjusted Height ${Math.floor(adjustedHeight)}`)
}
