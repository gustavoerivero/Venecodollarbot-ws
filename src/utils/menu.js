const commands = [
  {
    title: "_start_",
    command: "_start_",
    description: "Entabla comunicación conmigo.",
    example: "Utiliza el comando _start_ y el bot iniciará comunicación contigo."
  },
  {
    title: "_help_",
    command: "_help_",
    description: "Conoce los comandos disponibles.",
    example: "Puedes utilizar únicamente el comando _help_ para conocer los comandos disponibles."
  },
  {
    title: "_detalle_",
    command: "_detalle_ <comando>",
    description: "Obtén información detallada de un comando específico.",
    example: 'Puedes utilizar el comando _detalle_ seguido del comando que deseas obtener mayor información. Por ejemplo "_detalle_ _dolar_".'
  },
  {
    title: "_about_",
    command: "_about_",
    description: "Conoce la información detallada sobre el bot y su desarrollo.",
    example: "Utiliza el comando _about_ y el bot te responderá con información detallada sobre su desarrollo."
  },
  {
    title: "_dolar_",
    command: "_dolar_",
    description: "Obtén los valores del dólar según varias fuentes monitoras del dólar en Venezuela.",
    example: "Utiliza el comando _dolar_ y el bot te responderá con un mensaje que contendrá los valores de cada entidad monitora del dólar, su última fecha de actualización y un promedio entre todas las entidades monitoras."
  },
  {
    title: "_euro_",
    command: "_euro_",
    description: "Obtén los valores del _euro_ según varias fuentes monitoras del _euro_ en Venezuela.",
    example: "Utiliza el comando _euro_ y el bot te responderá con un mensaje que contendrá los valores de cada entidad monitora del _euro_, su última fecha de actualización y un promedio entre todas las entidades monitoras."
  },
  {
    title: "_fuente_",
    command: "_fuente_ <nombre>",
    description: "Obtén los valores del dólar según una _fuente_ especificada seguida del comando _fuente_.",
    example: 'Utiliza el comando _fuente_ <nombre> y el bot te responderá con un mensaje que contendrá los valores de cada entidad monitora del dólar que haya coincidido con el nombre que suministraste. Por ejemplo, "_fuente_ Monitor".'
  },
  {
    title: "_euroFuente_",
    command: "_euroFuente_ <nombre>",
    description: "Obtén los valores del euro según una fuente especificada seguida del comando _euroFuente_.",
    example: 'Utiliza el comando __euroFuente__ <nombre> y el bot te responderá con un mensaje que contendrá los valores de cada entidad monitora del euro que haya coincidido con el nombre que suministraste. Por ejemplo, "_euroFuente_ Monitor".'
  },
  {
    title: "_calcular_",
    command: "_calcular_ <moneda> <monto> <fuente>",
    description: 'Calcula el valor equivalente de un monto ingresado basado en la conversión Dólar <-> Bolívar. Las monedas disponibles son bolívares (Bs) y dólares ($). Si proporcionas una fuente específica, el bot utilizará solo esa fuente para realizar el cálculo, en caso contrario se utilizarán todas las fuentes disponibles. Por ejemplo, "cacular $ 1080 BCV", devolverá el valor equivalente en bolívares BCV. "_calcular_ Bs 1080", para obtener el valor equivalente en dólares según todas las fuentes.',
    example: 'Utiliza el comando _calcular_ <moneda> <monto> <fuente> y el bot te responderá con el cálculo correspondiente. El bot realizará el cálculo en la moneda opuesta a la indicada. Por ejemplo, si escribes "_calcular_ $ 50", el bot te dará el valor en bolívares de $50. Si proporcionas una fuente específica, solo se mostrarán los cálculos basados en esas fuentes. Siguiendo el ejemplo anterior, "_calcular_ $ 50 Paralelo" filtrará los resultados a la fuente "Paralelo" para _calcular_ el valor en bolívares de $50.'
  },
  {
    title: "_euroCalcular_",
    command: "_euroCalcular_ <moneda> <monto> <fuente>",
    description: 'Calcula el valor equivalente de un monto ingresado basado en la conversión Euro <-> Bolívar. Las monedas disponibles son bolívares (Bs) y euro (€). Si proporcionas una fuente específica, el bot utilizará solo esa fuente para realizar el cálculo, en caso contrario se utilizarán todas las fuentes disponibles. Por ejemplo, "_euroCalcular_ € 1080 BCV", devolverá el valor equivalente en bolívares BCV. "_euroCalcular_ Bs 1080", para obtener el valor equivalente en euros según todas las fuentes.',
    example: 'Utiliza el comando _euroCalcular_ <moneda> <monto> <fuente> y el bot te responderá con el cálculo correspondiente. El bot realizará el cálculo en la moneda opuesta a la indicada. Por ejemplo, si escribes "_euroCalcular_ EUR 50", el bot te dará el valor en bolívares de €50. Si proporcionas una fuente específica, solo se mostrarán los cálculos basados en esas fuentes. Siguiendo el ejemplo anterior, "_euroCalcular_ € 50 Paralelo" filtrará los resultados a la fuente "Paralelo" para calcular el valor en bolívares de €50.'
  },
  {
    title: "_avisos_",
    command: "_avisos_",
    description: "Activa los _avisos_ diarios del cambio del dólar.",
    example: "Utiliza el comando _avisos_ para que el bot te envíe diariamente dos mensajes con el reporte del dólar. Un mensaje a las 09:00 AM y otro a la 01:00 PM."
  },
  {
    title: "_remover_",
    command: "_remover_",
    description: "Desactiva los _avisos_ diarios del cambio del dólar.",
    example: "Utiliza el comando _remover_ para que el bot deje de enviar diaramente los mensajes con el reporte del dólar."
  }
];

const menu = () => {
  let menuString = "*Comandos disponibles:*\n\n";

  commands.forEach(item => {
    menuString += `${item.command} - ${item.description}\n\n`;
  });

  return menuString;
};

module.exports = {
  commands,
  menu
};