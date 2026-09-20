  document.querySelectorAll('.copy-link').forEach(function (link) {
    link.addEventListener('click', function () {
      console.log('点击了，要复制：', this.dataset.copy);
      var text = this.dataset.copy;

      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        console.log('复制成功');
      } catch (e) {
        console.log('复制失败', e);
      }
      document.body.removeChild(ta);
    });
  });