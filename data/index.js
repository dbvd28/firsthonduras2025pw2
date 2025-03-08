import { indexPage } from "./pages/indexPage";
import { contactUsPage } from "./pages/contactUsPage";
import { noticiasPage } from "./pages/noticiasPage";
import { galeriaPage } from "./pages/galeriaPage";


const commonData = {
    navigation: [
        { url: '/index.html', label: 'Inicio' },
        { url: '/galeria.html', label: 'Galería' },
        { url: '/noticias.html', label: 'Noticias' },
        { url: '/contactus.html', label: 'Acerca de FLL' },
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case '/index.html':
            pageData = indexPage
            break;
        case '/contactus.html':
            pageData = contactUsPage
            break;
        case '/noticias.html':
            pageData = noticiasPage
            break;
        case '/galeria.html':
            pageData = galeriaPage
            break;
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}