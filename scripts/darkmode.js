// Al cargar la página, establece el modo inicial basado en el almacenamiento local o la preferencia del sistema
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('color-theme') === 'dark' || 
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
    checkbox.checked = true;
  } else {
    htmlElement.classList.remove('dark');
    checkbox.checked = false;
  }

  // Agregar el evento de cambio al checkbox
  checkbox.addEventListener('change', () => {
  const htmlElement = document.documentElement;

  console.log("está funcionando esta funcion");
  
  if (checkbox.checked) {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
    localStorage.setItem('color-theme', 'dark');
  } else {
    htmlElement.classList.add('light');
    htmlElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }
});
});

