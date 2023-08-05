(function () {
  function createElement(tagName, options) {
    const element = document.createElement(tagName);
    element.className = options.className;
    return element;
  }

  // 遮罩层
  var mask = createElement('div', {
    className: 'c-mask'
  });

  // confirm容器
  var confirmBox = createElement('div', {
    className: 'c-confirm-box'
  });

  // confirm标题
  var confirmTitle = createElement('div', {
    className: 'c-confirm-title'
  });

  // confirm内容
  var confirmContent = createElement('div', {
    className: 'c-confirm-content'
  });

  // 确认按钮
  var okBtn = createElement('button', {
    className: 'c-confirm-button c-confirm-ok'
  });

  // 取消按钮
  var cancelBtn = createElement('button', {
    className: 'c-confirm-button c-confirm-cancel'
  });

  // 按钮区域
  var confirmOperation = createElement('div', {
    className: 'c-confirm-operation'
  });

  confirmBox.appendChild(confirmTitle);
  confirmBox.appendChild(confirmContent);
  confirmOperation.appendChild(cancelBtn);
  confirmOperation.appendChild(okBtn);
  confirmBox.appendChild(confirmOperation);
  mask.appendChild(confirmBox);

  /**
   * 显示确认框
   * @param {string} message - 提示信息
   * @param {Object} options - 选项对象
   * @param {string} options.title - 确认框标题，默认为'提示'
   * @param {string} options.okText - 确认按钮文本，默认为'确认'
   * @param {string} options.cancelText - 取消按钮文本，默认为'取消'
   * @param {function} options.onOk - 确认按钮点击回调函数
   * @param {function} options.onCancel - 取消按钮点击回调函数
   */
  function showConfirm(message, options) {
    var ops = options || {};

    confirmContent.innerText = message || '';
    confirmTitle.innerText = ops.title || '提示';
    okBtn.innerText = ops.okText || '确认';
    cancelBtn.innerText = ops.cancelText || '取消';

    document.body.appendChild(mask);

    okBtn.onclick = function () {
      document.body.removeChild(mask);
      if (ops.onOk && typeof ops.onOk === 'function') {
        ops.onOk();
      }
    };

    cancelBtn.onclick = function () {
      document.body.removeChild(mask);
      if (ops.onCancel && typeof ops.onCancel === 'function') {
        ops.onCancel();
      }
    };
  }

  window.showConfirm = showConfirm;
})();
