function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
}
escrevendoLetra();

function menuMobol() {
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .navegacao-primaria');

  ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
  })
}

function sobreMim() {
  const divExperience = document.querySelectorAll('.experience_content div');
  const liExperience = document.querySelectorAll('.experience_content ul li');

  const divEducation = document.querySelectorAll('.education_content div');
  const liEducation = document.querySelectorAll('.education_content ul li');

  divExperience[0].classList.add('ativo');
  liExperience[0].classList.add('ativo');
  divEducation[0].classList.add('ativo');
  liEducation[0].classList.add('ativo');

  function slideShow(index) {
    divExperience.forEach((div) => {
      div.classList.remove('ativo');
    });
    liExperience.forEach((botao) => {
      botao.classList.remove('ativo')
    });
    divExperience[index].classList.add('ativo');
    liExperience[index].classList.add('ativo');
  }

  function slideShow2(index) {
    divEducation.forEach((div) => {
      div.classList.remove('ativo');
    });
    liEducation.forEach((botao) => {
      botao.classList.remove('ativo')
    });
    divEducation[index].classList.add('ativo');
    liEducation[index].classList.add('ativo');
  }

  liExperience.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow(index);
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow2(index);
    });
  });
}
sobreMim();