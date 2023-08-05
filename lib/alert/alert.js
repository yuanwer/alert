(function () {
    function bindChildren(el, children) {
        if (typeof children === 'string') {
            el.innerText = children
        } else if (Array.isArray(children) && children.length) {
            createElement(children, el)
        }
    }

    function bindAttributes(el, attributes) {
        for (var attrKey in attributes) {
            el[attrKey] = attributes[attrKey]
        }
    }

    function bindEvent(el, event) {
        for (const eventName in event) {
            el.addEventListener(eventName, event[eventName])
        }
    }

    function createElement(elementJSON, parentElement) {
        var parent = parentElement

        if (Array.isArray(elementJSON)) {
            for (var i = 0; i < elementJSON.length; i++) {
                var elJSON = elementJSON[i]
                var el = document.createElement(elJSON.tagName)

                if (elJSON.attributes) {
                    bindAttributes(el, elJSON.attributes)
                }

                if (elJSON.children) {
                    bindChildren(el, elJSON.children)
                }

                if (elJSON.event) {
                    bindEvent(el, elJSON.event)
                }

                parent.appendChild(el)
            }
        } else if (elementJSON instanceof Object) {
            var el = document.createElement(elementJSON.tagName)

            if (elementJSON.attributes) {
                bindAttributes(el, elementJSON.attributes)
            }

            if (elementJSON.children) {
                bindChildren(el, elementJSON.children)
            }

            if (elementJSON.event) {
                bindEvent(el, elementJSON.event)
            }

            parent = el
        }
        return parent
    }


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
        var ops = options || {}

        var elementJSON = {
            tagName: 'div',
            attributes: {
                className: 'c-mask'
            },
            children: [
                {
                    tagName: 'div',
                    attributes: {
                        className: 'c-alert-box'
                    },
                    children: [
                        {
                            tagName: 'div',
                            attributes: {
                                className: 'c-alert-title'
                            },
                            children: ops.title || '提示'
                        },
                        {
                            tagName: 'div',
                            attributes: {
                                className: 'c-alert-content'
                            },
                            children: message || '内容'
                        },
                        {
                            tagName: 'div',
                            attributes: {
                                className: 'c-alert-operation'
                            },
                            children: [
                                {
                                    tagName: 'button',
                                    attributes: {
                                        className: 'c-alert-button c-alert-ok'
                                    },
                                    children: ops.okText || '确认',
                                    event: {
                                        click: function (event) {
                                            document.body.removeChild(el)
                                            if (ops.onOk && typeof ops.onOk === 'function') {
                                                ops.onOk()
                                            }
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                }
            ]
        }

        var el = createElement(elementJSON)

        document.body.appendChild(el)
    }

    window.showAlert = showAlert
})()
