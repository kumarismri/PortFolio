import React,{createContext, useState} from 'react'
// import About from './About';

export const Globalinfo=createContext();

export const AboutProp = ({children}) => {

 const [obj] = useState(
    [{
    "id":"1",
    img:"https://w7.pngwing.com/pngs/390/229/png-transparent-logo-html5-brand-design-text-logo-number.png",
    category:"about"
    },
    {
    "id":"2",
    img:"https://e7.pngegg.com/pngimages/188/673/png-clipart-cascading-style-sheets-css3-bootstrap-valid-blue-angle-thumbnail.png",
    category:"about"
    },
    { 
    "id":"3",  
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    category:"about"
    },
    {
    "id":"4",
    img:"https://static.javatpoint.com/images/javascript/javascript_logo.png",
    category:"about"
    },
    {"id":"5",
    img:"https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
    category:"about"
    },
    {
    "id":"6",
    img:"https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
    category:"about"
    },
    {"id":"7",
    img:"https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
    category:"about"
    },
    {"id":"8",
    img:"https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png",
    category:"about"
    },
    {"id":"9",
    img:"https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png",
    category:"about"
    }]);

  return (
    <Globalinfo.Provider value={[obj]}>
        {children}
    </Globalinfo.Provider>
  )
}