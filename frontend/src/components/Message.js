import Swal from 'sweetalert2'

export const messageOne = (error)=>{
    Swal.fire({
        title: "We're so sorry",
        text: "We're having some troubles accessing this information right now. Please try again later",
        footer: `${error}`,
        imageUrl: '/assets/sad-panda.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Panda Icon',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Go back Home'
      })
}

export const msgNoExist = (footer)=>{
    Swal.fire({
        title: "We're so sorry",
        text: "The page you are looking for doesn't exist. Please try a valid city",
        footer: `${footer}`,
        icon: 'warning',
        // imageUrl: '/assets/sad-panda.png',
        // imageWidth: 100,
        // imageHeight: 100,
        // imageAlt: 'Panda Icon',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Go back Home'
      })
}