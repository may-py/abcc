import React from 'react'

function Header() {
    let x = {
        nav: {"background-color": "#e3f2fd"},
        btn: {"text-decoration": "azure"}
    }
  return (
    <div>
        <nav className="navbar navbar-light" style={x.nav}>
            <div className="container">
                <a
                className="btn btn-outline-success me-2"
                style={x.btn}
                href="https://www.youtube.com/channel/UCbFpiitUZRMgS_xp2fJa0tQ"
                >
                ABCC! Click me and see Magic
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Header