import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="container">
          <header className="col-12">
            <h1>
              <span>聯絡我們</span>
              <span className="subtitle">(* 為必填)</span>
            </h1>
          </header>
          <div className="row">
            <div className="col-4 info">
              <div className="info-title">
                <h3>姓名*</h3>
              </div>
              <div>
                <input id="txtName" type="text"></input>
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-title">
                <h3>信箱*</h3>
              </div>
              <div>
                <input id="txtEmail" type="text"></input>
              </div>
            </div>
            <div className="col-4 info">
              <div className="info-title">
                <h3>問題描述*</h3>
              </div>
              <div>
                <input id="txtDescription" type="text"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <span className="button" onClick={this.sendOnClick}>送出問題</span>
          </div>
        </div>
      </div>
    )
  }

  sendOnClick() {
    let txtName = document.getElementById('txtName')
    let txtEmail = document.getElementById('txtEmail')
    let txtDescription = document.getElementById('txtDescription')
    let name = txtName.value.trim()
    let email = txtEmail.value.trim()
    let description = txtDescription.value.trim()

    console.log(name, email, description);

    // name: entry.1423215103
    // email: entry.490045987
    // description: entry.498460976

    if (name === '' || email === '' || description === '') {
      alert('請確實填寫所有資訊')
    } else {
      $.ajax({
        url: "https://docs.google.com/forms/d/1ZujQw3xtfYXD_4rR7rRlt8gKHzRsRUGDyy_GfUwDdCc/formResponse",
        data: {
          "entry.1423215103": name,
          "entry.490045987": email,
          "entry.498460976": description
        },
        type: "POST",
        dataType: "jsonp",
        statusCode: {
          200: function () {
            alert('問題成功發送，謝謝您的回饋！')
          }
        }
      })

      txtName.value = ''
      txtEmail.value = ''
      txtDescription.value = ''
    }
  }
}
