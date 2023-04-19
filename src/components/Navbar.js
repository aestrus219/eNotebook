const Navbar = () => {
    return(
        <div className="navbar bg-base-200">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl no-animation">eNotebook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        </div>
        <div className="navbar-end space-x-4 pr-3">
          <label className="btn gap-2 btn-warning" for="my-modal-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d2800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            New Note
          </label>
          <div className="tooltip tooltip-bottom" data-tip="Sign Out">
          <a className="btn btn-square btn-error">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
          </a>
        </div>
        </div>
      </div>
    )
}

export default Navbar