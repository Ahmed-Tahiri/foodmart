export let Copyright = () => {
    return <div id="footer-bottom">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 copyright">
                    <p>© {new Date().getFullYear()} Interns. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
}