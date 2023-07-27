const materiasUniversidad = [
    {
      nombre: "psicologia",
      profesor: "Lucía  Cárdenas",
      aula: "17",
      turno: "mañana",
      horario: "7 a 9",
      promocionable: "si",
    },
    {
      nombre: "psicologia",
      profesor: "Marcos Díaz",
      aula: "18",
      turno: "mañana",
      horario: "9 a 11",
      promocionable: "no",
    },
    {
        nombre: "psicologia",
        profesor: "Marcos Díaz",
        aula: "21",
        turno: "tarde",
        horario: "15 a 17",
        promocionable: "no",
      },
      {
        nombre: "psicologia",
        profesor: "Priscila Chávez",
        aula: "7",
        turno: "tarde",
        horario: "17 a 19",
        promocionable: "si",
      },
      {
        nombre: "psicologia",
        profesor: "Nicolás Rodríguez",
        aula: "9",
        turno: "noche",
        horario: "20 a 22",
        promocionable: "si",
      },
      {
        nombre: "semiologia",
        profesor: "Micaela Sosa",
        aula: "2",
        turno: "mañana",
        horario: "8 a 10",
        promocionable: "no",
      },
      {
        nombre: "semiologia",
        profesor: "Roberto Estévez",
        aula: "22",
        turno: "mañana",
        horario: "9 a 11",
        promocionable: "no",
      },
      {
          nombre: "semiologia",
          profesor: "Mabel  López",
          aula: "4",
          turno: "tarde",
          horario: "14 a 16:30",
          promocionable: "si",
        },
        {
          nombre: "semiologia",
          profesor: "Lucas García",
          aula: "14",
          turno: "noche",
          horario: "19 a 21",
          promocionable: "si",
        },
        {
          nombre: "semiologia",
          profesor: "Pablo Rojas",
          aula: "11",
          turno: "noche",
          horario: "20 a 22",
          promocionable: "si",
        },
        {
            nombre: "antropologia",
            profesor: "Carolina Islas",
            aula: "8",
            turno: "mañana",
            horario: "7 a 9",
            promocionable: "no",
          },
          {
            nombre: "antropologia",
            profesor: "Florencia Gimenez",
            aula: "20",
            turno: "tarde",
            horario: "13 a 15",
            promocionable: "si",
          },
          {
              nombre: "antropologia",
              profesor: "Marcos Díaz",
              aula: "32",
              turno: "tarde",
              horario: "15 a 17",
              promocionable: "no",
            },
            {
              nombre: "antropologia",
              profesor: "Priscila Chávez",
              aula: "19",
              turno: "tarde",
              horario: "17 a 19",
              promocionable: "si",
            },
            {
              nombre: "antropologia",
              profesor: "Nicolás Rodríguez",
              aula: "18",
              turno: "noche",
              horario: "21 a 23",
              promocionable: "no",
            },
      



  ];
  

  const MateriaUsuario = prompt("Ingrese la materia a cursar (antropologia, psicologia o semiologia):");
  const turnoUsuario = prompt("Ingrese el turno (mañana, tarde, noche):");





  function filtrarMaterias(nombreMateria, turno) {
   
    const nombreMateriaMin = nombreMateria.toLowerCase();
  

    const materiasFiltradas = materiasUniversidad.filter((materia) => {
      const nombreMin = materia.nombre.toLowerCase();
      return nombreMin.includes(nombreMateriaMin) && materia.turno === turno;
    });
  

    materiasFiltradas.forEach((materia) => {
      console.log("Materia:", materia.nombre);
      console.log("Profesor:", materia.profesor);
      console.log("Aula:", materia.aula);
      console.log("Turno:", materia.turno);
      console.log("Horario:", materia.horario);
      console.log("Promocionable:", materia.promocionable);
      console.log("------------------------");
    });
  

    if (materiasFiltradas.length === 0) {
      console.log("No se encontraron materias que cumplan con los requisitos.");
    }
  }
  

  
  filtrarMaterias(MateriaUsuario, turnoUsuario);
