import React from 'react'

export default function selectedimage() {
   const state = { index: 0, picList: [] }
   const onclicknext = () => {
        if (this.state.index + 1 === this.state.picList.length) {
            this.setState({ index: 0 })
        }
        else {
            this.setState({ index: this.state.index + 1 })
        }
    }
    const onclickpreviousw = () => {
        if (this.state.index - 1 === -1) {
            this.setState({ index: this.state.picList.length - 1 })
        }
        else {
            this.setState({ index: this.state.index - 1 })
        }
    }
    return (
        <div>
            <img src={this.state.picList[this.state.index]} style={{ "maxHeight": "40px", "width": "40%" }} /><br />
            <button style={{ "fontSize": "18px" }} onClick={this.onclickpreviousw}>prev</button>
            <button style={{ "margin-left": "5px", "fontSize": "18px" }} onclick={this.onclicknext}>next</button>
        </div>
    )
}
