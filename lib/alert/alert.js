(function () {
  function createElement(tagName, options) {
    var element = document.createElement(tagName);
    element.className = options.className;
    return element;
  }

  // 遮罩层
  var mask = createElement('div', {
    className: 'c-mask'
  });

  // alert容器
  var alertBox = createElement('div', {
    className: 'c-alert-box'
  });

  // alert标题
  var alertTitle = createElement('div', {
    className: 'c-alert-title'
  });

  // alert内容
  var alertContent = createElement('div', {
    className: 'c-alert-content'
  });

  // 确认按钮
  var okBtn = createElement('button', {
    className: 'c-alert-button c-alert-ok'
  });

  // 按钮区域
  var alertOperation = createElement('div', {
    className: 'c-alert-operation'
  });

  // 组装Alert
  alertBox.appendChild(alertTitle);
  alertBox.appendChild(alertContent);
  alertOperation.appendChild(okBtn);
  alertBox.appendChild(alertOperation);
  mask.appendChild(alertBox);

  /**
   * 显示弹窗提示
   * @param {string} message - 提示消息
   * @param {object} options - 选项对象
   * @param {string} [options.title='提示'] - 弹窗标题，默认为'提示'
   * @param {string} [options.okText='确认'] - 确认按钮文本，默认为'确认'
   * @param {function} [options.onOk] - 点击确认按钮后的回调函数
   * @returns {void}
   */
  function showAlert(message, options) {
    var ops = options || {};

    alertContent.innerText = message || '';
    alertTitle.innerText = ops.title || '提示';
    okBtn.innerText = ops.okText || '确认';

    document.body.appendChild(mask);

    okBtn.onclick = function () {
      document.body.removeChild(mask);
      if (ops.onOk && typeof ops.onOk === 'function') {
        ops.onOk();
      }
    };
  }

  window.showAlert = showAlert;
})();
