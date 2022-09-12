function sideBarclose() {
    const headerTitle = document.getElementById('headerTitle')
    const menuSidebar = document.getElementById('sideBar')
    const logoHidden = document.getElementById('logoClose')
    const searchBar = document.getElementById('search-box')
    const inputNone = document.getElementById('smallInput')
    const profileHidden = document.getElementById('profile')
    const imgProfileHidden = document.getElementById('img-woman')
    const textProfileHidden = document.getElementById('nameProfile')

    if(menuSidebar.style.width == '15.625rem' ){
        menuSidebar.style.width = '4.975rem';
        logoHidden.style.display = 'none';
        searchBar.style.width = '3.5rem';
        inputNone.style.display = 'none';
        profileHidden.style.width = '4.975rem';
        imgProfileHidden.style.display = 'none';
        textProfileHidden.style.display = 'none';
        headerTitle.style.marginLeft = '-10.5rem'
        
    }else{
        menuSidebar.style.width = '15.625rem' 
        logoHidden.style.display = 'block'
        searchBar.style.width = '13.875rem'
        inputNone.style.display = 'flex'
        profileHidden.style.width = '15.625rem'
        imgProfileHidden.style.display = 'flex'
        textProfileHidden.style.display = 'block';
        headerTitle.style.marginLeft = 'initial'
    }

}