var elements = document.querySelectorAll('div[data-testid="cellInnerDiv"]');

var keyword = 'ミュートしているアカウントによるツイートです。'; // ここに特定のワードを入力します。

for(var i = 0; i < elements.length; i++){
    if(elements[i].textContent.includes(keyword)){
        elements[i].style.display = 'none';
    }
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1 && node.matches('div[data-testid="cellInnerDiv"]') && node.textContent.includes(keyword)) {
          node.style.display = 'none';
        }
      });
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });