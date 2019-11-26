var menuItem = {
  id: 'CPUBenchmark',
  title: 'CPUBenchmark',
  contexts: ['selection']
}

chrome.contextMenus.create(menuItem)

function fixedEncodeURI (str) {
  return encodeURI(str)
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == 'CPUBenchmark' && clickData.selectionText) {
    var cpuBenchUrl =
      'https://www.cpubenchmark.net/cpu.php?cpu=' + fixedEncodeURI(clickData.selectionText)
    var createData = {
      url: cpuBenchUrl,
      type: 'popup',
      top: 5,
      left: 5,
      width: screen.availWidth / 2,
      height: Math.min(Math.max(800, screen.availHeight / 2), screen.availHeight)
    }
    chrome.windows.create(createData, function () {})
  }
})
