import Swal from "sweetalert2";

export const messageOne = () => {
  Swal.fire({
    title: "We're so sorry",
    text: "We're having some troubles accessing this information right now. Please try again later",
    imageUrl: "/assets/sad-panda.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Panda Icon",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Accept",
  });
};

export const msgNoExist = () => {
  Swal.fire({
    title: "We're so sorry",
    text: "The page you are looking for doesn't exist. Please try a valid city",
    icon: "warning",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Accept",
  });
};

export const problemMessage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    imageUrl: "/assets/sad-panda.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Panda Icon",
    title: "We're so sorry.",
    text: "An error ocurred. Please try again later.",
  });
};

export const message = (icon, title, position = 'top-end') => {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: icon,
    title: title
  })
}


