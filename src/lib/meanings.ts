export interface DetailedMeaning {
  meaning: string;
  lightAndShadow: string;
  tip: string;
}

export const LIFE_PATH_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Tu Camino de Vida 1 te marca como un 'Pionero'. Tu misión es desarrollar tu independencia, tu coraje y tu capacidad de liderazgo. Has venido a aprender a confiar en tu propia voz y a abrir nuevos caminos para ti y para los demás. Eres una fuerza de inicio, con una energía creativa que busca constantemente manifestarse.",
        lightAndShadow: "En luz, eres un líder carismático, innovador y valiente. En sombra, esta misma fuerza puede volverse arrogancia, egoísmo e impaciencia. Puedes tender a ser dominante y a sentirte aislado si no aprendes a colaborar.",
        tip: "Comprométete a iniciar un proyecto personal que te apasione profundamente. Practica la toma de decisiones confiando en tu instinto."
    },
    2: {
        meaning: "Tu Camino de Vida 2 te identifica como el 'Diplomático'. Tu misión es aprender sobre la cooperación, la paciencia y el equilibrio en las relaciones. Vienes a ser un pacificador, a unir a las personas y a cultivar la armonía en tu entorno.",
        lightAndShadow: "En luz, eres empático, adaptable y un mediador excepcional. En sombra, puedes volverte hipersensible, dependiente y temeroso del conflicto.",
        tip: "Establece límites claros y amorosos en tus relaciones. Aprende a decir 'no' cuando sea necesario."
    },
    3: {
        meaning: "Un Camino de Vida 3 te señala como el 'Comunicador'. Tu misión es expresar tu verdad creativa y traer alegría al mundo. Vienes a aprender a usar tu voz para inspirar y elevar a los demás.",
        lightAndShadow: "En luz, eres creativo, encantador y optimista. En sombra, puedes caer en la dispersión, la superficialidad y el drama.",
        tip: "Elige un canal creativo y comprométete a desarrollarlo con disciplina. Practica la comunicación consciente."
    },
    4: {
        meaning: "Tu Camino de Vida 4 te define como el 'Constructor'. Tu misión es crear bases sólidas, estabilidad y orden. Vienes a aprender el valor del trabajo duro, la disciplina y la perseverancia.",
        lightAndShadow: "En luz, trabajador, honesto y confiable. En sombra, rígido, terco y demasiado cauteloso.",
        tip: "Crea planes detallados para tus metas, pero permítete desviarte del plan cuando surjan nuevas oportunidades."
    },
    5: {
        meaning: "Un Camino de Vida 5 te marca como el 'Aventurero'. Tu misión es experimentar la vida en toda su diversidad y aprender a través del cambio y la libertad. Vienes a romper con la rutina.",
        lightAndShadow: "En luz, adaptable, carismático y magnético. En sombra, irresponsabilidad y falta de compromiso.",
        tip: "Viaja, aprende nuevos idiomas o explora diferentes culturas. Practica el mindfulness."
    },
    6: {
        meaning: "Tu Camino de Vida 6 te designa como el 'Nutridor'. Tu misión es aprender sobre la responsabilidad, el amor y el servicio. Vienes a crear belleza y armonía.",
        lightAndShadow: "En luz, amoroso, responsable y compasivo. En sombra, controlador y entrometido.",
        tip: "Crea un hogar que sea tu santuario. Ofrece tu ayuda pero soltá el resultado. Inicia autocuidado innegociable."
    },
    7: {
        meaning: "Un Camino de Vida 7 te señala como el 'Sabio'. Tu misión es buscar la verdad, el conocimiento y la conexión espiritual a través de la introspección y el análisis.",
        lightAndShadow: "En luz, sabio, intuitivo y analítico. En sombra, aislamiento, desconfianza y frialdad emocional.",
        tip: "Establece una práctica diaria de meditación. Pasa tiempo en la naturaleza."
    },
    8: {
        meaning: "Tu Camino de Vida 8 te define como el 'Poderoso'. Tu misión es aprender a manejar el poder, la abundancia y la autoridad de manera equilibrada y ética.",
        lightAndShadow: "En luz, líder visionario y ambicioso. En sombra, autoritario, controlador y materialista.",
        tip: "Establece metas financieras claras. Practica la generosidad. Aprende a delegar."
    },
    9: {
        meaning: "Un Camino de Vida 9 te designa como el 'Humanitario'. Tu misión está ligada al servicio desinteresado, la compasión y la preocupación colectiva.",
        lightAndShadow: "En luz, compasivo, generoso y altruista. En sombra, resentimiento si los sacrificios no son valorados.",
        tip: "Involúcrate en causas humanitarias. Practica el desapego. Expresa emociones por canales artísticos."
    },
    11: {
        meaning: "Camino de Vida 11: 'Maestro Intuitivo'. Potencial espiritual inmenso. Misión de inspirar a través de elevada intuición y conexión sutil.",
        lightAndShadow: "En luz, visionario y sanador. En sombra, tensión nerviosa, ansiedad y dudas.",
        tip: "Meditación diaria para calmar la mente. Pasa tiempo en la naturaleza. Confía en tus corazonadas."
    },
    22: {
        meaning: "Camino de Vida 22: 'Maestro Constructor'. Misión de tomar sueños espirituales y convertirlos en realidad tangible para la humanidad.",
        lightAndShadow: "En luz, líder pragmático y visionario. En sombra, presión abrumadora o uso egoísta del poder.",
        tip: "Piensa en grande pero actúa paso a paso. Divide visiones en metas pequeñas."
    },
    33: {
        meaning: "Camino de Vida 33: 'Maestro del Amor'. Misión de servicio desinteresado y sanación a través del amor incondicional.",
        lightAndShadow: "En luz, fuente de amor y sanación. En sombra, carga inmensa de responsabilidad o mártir.",
        tip: "Enfócate en tu propio amor propio primero. Establece límites claros para proteger tu energía."
    }
};

export const SOUL_NUMBER_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Deseo profundo de ser independiente, original y el número uno. Anhelas liderar y ser reconocido.",
        lightAndShadow: "Luz: líder innovador. Sombra: egoísmo, arrogancia y renuencia a pedir ayuda.",
        tip: "Emprende proyectos solos pero buscá oportunidades para colaborar."
    },
    2: {
        meaning: "Deseo de unión, armonía y amor. Alma sensible que anhela la conexión y la cooperación.",
        lightAndShadow: "Luz: empático y leal. Sombra: dependencia excesiva y miedo al conflicto.",
        tip: "Poné límites saludables; aprendé a decir 'no'."
    },
    3: {
        meaning: "Anhelo de autoexpresión, creatividad y alegría. Tu alma desea comunicar de manera lúdica.",
        lightAndShadow: "Luz: vibrante y sociable. Sombra: superficialidad y drama.",
        tip: "Encontrá una salida creativa constante."
    },
    4: {
        meaning: "Deseo de estabilidad, seguridad y orden. Valorás la estructura y la disciplina.",
        lightAndShadow: "Luz: confiable y perseverante. Sombra: rígido e inflexible.",
        tip: "Creá rutinas flexibles y trabajá en proyectos tangibles."
    },
    5: {
        meaning: "Deseo de libertad, aventura y experiencia sensorial. Alma que anhela vivir al máximo.",
        lightAndShadow: "Luz: adaptable y versátil. Sombra: falta de compromiso.",
        tip: "Canalizá el amor por la variedad a través de viajes."
    },
    6: {
        meaning: "Deseo de amor, armonía y responsabilidad familiar. Tu alma anhela cuidar y nutrir.",
        lightAndShadow: "Luz: compasivo y protector. Sombra: controlador y mártir.",
        tip: "Enfocate en crear un hogar en paz y cuidate a vos mismo."
    },
    7: {
        meaning: "Anhelo de sabiduría y verdad profunda. Alma investigadora que busca desentrañar misterios.",
        lightAndShadow: "Luz: sabio e intuitivo. Sombra: aislamiento y frialdad.",
        tip: "Creá un espacio sagrado para la meditación."
    },
    8: {
        meaning: "Deseo de poder, éxito y maestría material. Te motiva la ambición y el reconocimiento.",
        lightAndShadow: "Luz: líder nato visionario. Sombra: dominante e intolerante.",
        tip: "Definí el éxito incluyendo bienestar emocional."
    },
    9: {
        meaning: "Deseo de servicio a la humanidad y compasión universal. Sentido de conexión global.",
        lightAndShadow: "Luz: compasivo y altruista. Sombra: abrumado por el sufrimiento ajeno.",
        tip: "Elegí una causa apasionante y aprendé a recibir con gratitud."
    },
    11: {
        meaning: "Deseo de iluminación espiritual e inspiración. Alma que anhela conectar con planos superiores.",
        lightAndShadow: "Luz: faro de visión. Sombra: tensión nerviosa y ansiedad.",
        tip: "Meditación y naturaleza son esenciales."
    },
    22: {
        meaning: "Deseo de construir valores duraderos para la humanidad. Traducir sueños en realidades tangibles.",
        lightAndShadow: "Luz: potencial ilimitado de logro. Sombra: miedo al fracaso.",
        tip: "Permitite soñar en grande y desglosá esas visiones."
    },
    33: {
        meaning: "Deseo de amor incondicional y sanación. Aliviar sufrimiento ajeno y elevar la conciencia.",
        lightAndShadow: "Luz: faro de amor y sabiduría. Sombra: sacrificio extremo.",
        tip: "Tu prioridad debe ser tu propio bienestar."
    }
};

export const PERSONALITY_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Líder natural, independiente y seguro. La gente te ve como alguien que sabe lo que quiere.",
        lightAndShadow: "Luz: carismático. Sombra: dominante o arrogante.",
        tip: "Muestra vulnerabilidad de vez en cuando."
    },
    2: {
        meaning: "Imagen de amabilidad, diplomacia y cooperación. Visto como una persona pacífica.",
        lightAndShadow: "Luz: encantador y gentil. Sombra: indeciso o tímido.",
        tip: "Expresa tus opiniones con amabilidad pero firmeza."
    },
    3: {
        meaning: "Sociable, carismático y alegre. Percibido como optimista y creativo.",
        lightAndShadow: "Luz: magnético. Sombra: superficial o dramático.",
        tip: "Usa tu don de comunicación para inspirar."
    },
    4: {
        meaning: "Sólido, confiable y trabajador. Te ven como alguien disciplinado y con pies en tierra.",
        lightAndShadow: "Luz: inspira confianza. Sombra: rígido o terco.",
        tip: "Agenda tiempo para el ocio seriamente."
    },
    5: {
        meaning: "Aventurero, versátil y carismático. Percibido como alguien lleno de energía.",
        lightAndShadow: "Luz: emocionante. Sombra: poco confiable.",
        tip: "Aprendé algo nuevo para canalizar curiosidad."
    },
    6: {
        meaning: "Calidez, responsabilidad y confianza. Visto como nutridor y protector.",
        lightAndShadow: "Luz: amoroso. Sombra: entrometido o controlador.",
        tip: "Ofrece ayuda solo cuando te la pidan."
    },
    7: {
        meaning: "Sabio, introspectivo y misterioso. Te ven como inteligente con vida interior.",
        lightAndShadow: "Luz: autoridad tranquila. Sombra: distante o frío.",
        tip: "Mostrá un poco más de tu lado vulnerable."
    },
    8: {
        meaning: "Poderoso, ambicioso y competente. Líder natural con autoridad para el éxito.",
        lightAndShadow: "Luz: influyente. Sombra: intimidante o materialista.",
        tip: "Practicá la generosidad con tu equipo."
    },
    9: {
        meaning: "Compasivo, carismático y con visión global. Alma vieja humanitaria.",
        lightAndShadow: "Luz: inspirador. Sombra: poco práctico.",
        tip: "Involucrate en causas sociales o artísticas."
    },
    11: {
        meaning: "Energía eléctrica, intuitiva e inspiradora. Radiás un carisma magnético.",
        lightAndShadow: "Luz: visionario. Sombra: ansioso o desconectado.",
        tip: "Practicá técnicas de enraizamiento."
    },
    22: {
        meaning: "Maestro Constructor potente. Potencial ilimitado para hazañas extraordinarias.",
        lightAndShadow: "Luz: poder con propósito. Sombra: manipulador.",
        tip: "Empodera a otros mientras construís."
    },
    33: {
        meaning: "Maestro del Amor compasivo. Luz de amor incondicional y sabiduría.",
        lightAndShadow: "Luz: fuente de compasión. Sombra: mártir.",
        tip: "Enseñá con el ejemplo viviendo alegría."
    }
};

export const EXPRESSION_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Misión de desarrollar y expresar tu liderazgo y originalidad. Pionero de nuevos caminos.",
        lightAndShadow: "Luz: líder nato ambicioso. Sombra: arrogancia.",
        tip: "Liderá de forma inclusiva; aprendé a delegar."
    },
    2: {
        meaning: "Misión de traer armonía y diplomacia. Pacificador y excelente socio.",
        lightAndShadow: "Luz: diplomático excepcional. Sombra: dependiente.",
        tip: "Cultivá relaciones basadas en respeto mutuo."
    },
    3: {
        meaning: "Misión de expresar alegría y creatividad. Inspirar a otros con optimismo.",
        lightAndShadow: "Luz: comunicador carismático. Sombra: dispersión.",
        tip: "Elegí una disciplina artística y dedicate."
    },
    4: {
        meaning: "Misión de construir valor duradero con disciplina. Pilar de estabilidad.",
        lightAndShadow: "Luz: confiable. Sombra: rígido y resistente.",
        tip: "Involucrate en proyectos de largo plazo."
    },
    5: {
        meaning: "Misión de experimentar cambio y libertad. Catalizador que rompe convenciones.",
        lightAndShadow: "Luz: aventurero. Sombra: inconsistencia.",
        tip: "Buscá carreras que ofrezcan variedad."
    },
    6: {
        meaning: "Misión de servir y crear armonía. Consejero y protector familiar.",
        lightAndShadow: "Luz: protector amoroso. Sombra: controlador.",
        tip: "Sirve sin imponer tu visión."
    },
    7: {
        meaning: "Misión de buscar y compartir la verdad profunda. Puente entre mundos.",
        lightAndShadow: "Luz: sabio investigador. Sombra: escepticismo.",
        tip: "Compartí tus descubrimientos para iluminar."
    },
    8: {
        meaning: "Misión de maestría material con poder ético. Líder ejecutivo manifestador.",
        lightAndShadow: "Luz: líder justo. Sombra: materialismo.",
        tip: "Asegurate que tus metas tengan propósito."
    },
    9: {
        meaning: "Misión de servicio humanitario y sabiduría universal. Alma vieja generosa.",
        lightAndShadow: "Luz: compasivo sabio. Sombra: melancolía.",
        tip: "Practicá el perdón y soltá el pasado."
    },
    11: {
        meaning: "Misión de ser canal de inspiración espiritual. Visionario que ilumina.",
        lightAndShadow: "Luz: sanador visionario. Sombra: tensión nerviosa.",
        tip: "Meditación es necesidad absoluta."
    },
    22: {
        meaning: "Maestro Constructor que manifiesta ideales a gran escala para beneficio social.",
        lightAndShadow: "Luz: poderoso práctico. Sombra: uso egoísta.",
        tip: "Mantené ambiciones alineadas al servicio."
    },
    33: {
        meaning: "Maestro del Amor Sanador. Servicio desinteresado y guía compasiva.",
        lightAndShadow: "Luz: faro de sanación. Sombra: sacrificio extremo.",
        tip: "Ama desde tu propia plenitud."
    }
};

export const STRENGTH_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Don del liderazgo e independencia. Herramienta secreta ante crisis.",
        lightAndShadow: "Luz: decidido e innovador. Sombra: terquedad.",
        tip: "Confía en tu voz interior en dudas."
    },
    2: {
        meaning: "Don de la diplomacia e intuición. Habilidad para crear armonía.",
        lightAndShadow: "Luz: mediador excepcional. Sombra: evasión del conflicto.",
        tip: "Sé observador imparcial en conflictos."
    },
    3: {
        meaning: "Don de creatividad y optimismo. Capacidad de transformar dolor en arte.",
        lightAndShadow: "Luz: resiliente y alegre. Sombra: dispersión.",
        tip: "Usá la escritura como salvavidas emocional."
    },
    4: {
        meaning: "Don de disciplina y planificación. Ancla en medio del caos.",
        lightAndShadow: "Luz: roca confiable. Sombra: rígido.",
        tip: "Dividí problemas grandes en pasos pequeños."
    },
    5: {
        meaning: "Don de adaptabilidad e ingenio. Coraje para soltar lo viejo.",
        lightAndShadow: "Luz: maestro de reinvención. Sombra: inconsistencia.",
        tip: "Acepta el cambio como aliado."
    },
    6: {
        meaning: "Don de sanación y responsabilidad. Ofrecer consuelo y espacio seguro.",
        lightAndShadow: "Luz: consejero nato. Sombra: controlador.",
        tip: "Ponete a vos mismo primero en responsabilidades."
    },
    7: {
        meaning: "Don de introspección y análisis. Claridad que trasciende lógica.",
        lightAndShadow: "Luz: estratega brillante. Sombra: pensamiento excesivo.",
        tip: "Las respuestas están dentro tuyo; meditar clave."
    },
    8: {
        meaning: "Don de poder personal y resiliencia. Capacidad de transformar fracasos.",
        lightAndShadow: "Luz: líder ejecutivo. Sombra: controlador.",
        tip: "Activá tu 'modo ejecutivo' ante revés."
    },
    9: {
        meaning: "Don de compasión y perdonar para soltar el pasado.",
        lightAndShadow: "Luz: alma vieja tolerante. Sombra: absorber dolor.",
        tip: "Practicá el perdón; herramienta de liberación."
    },
    11: {
        meaning: "Don de intuición elevada e inspiración divina. Canal de señales.",
        lightAndShadow: "Luz: visionario milagroso. Sombra: dudas.",
        tip: "Confía en corazonadas y sincronicidades."
    },
    22: {
        meaning: "Don de manifestación a gran escala. Visión para cambiar el mundo.",
        lightAndShadow: "Luz: constructor práctico. Sombra: miedo al poder.",
        tip: "No le temas a magnitud de sueños."
    },
    33: {
        meaning: "Don de sanación por amor incondicional. Elevás vibración.",
        lightAndShadow: "Luz: faro de esperanza. Sombra: sacrificio agotador.",
        tip: "Priorizá tu alegría para irradiar amor."
    }
};

export const PERSONAL_YEAR_MEANINGS: Record<number, DetailedMeaning> = {
    1: {
        meaning: "Estás en un Año Personal 1, el comienzo de un nuevo ciclo de nueve años. Es un tiempo para la siembra, la independencia y la acción audaz. La energía te impulsa a iniciar nuevos proyectos, a tomar la iniciativa y a definir quién quieres ser en esta nueva etapa. Es un año para ser valiente, original y para enfocarte en tus propias metas sin depender de los demás.",
        lightAndShadow: "En luz, este año trae una oleada de nueva energía y oportunidades para perseguir tus sueños. En sombra, puedes sentirte solo, impaciente o abrumado por la presión de tener que empezar de nuevo.",
        tip: "Haz una lista clara de tus metas para este ciclo. No tengas miedo de empezar de cero y confía en tu instinto."
    },
    2: {
        meaning: "El Año Personal 2 es un período de paciencia, cooperación y gestación. Tras la intensidad del año 1, este es el momento de esperar a que las semillas broten. El enfoque está en las relaciones, la diplomacia y el trabajo en equipo. Es un año para ser sensible a las necesidades de los demás y para cultivar la armonía.",
        lightAndShadow: "En luz, fluyes con paciencia y atraes colaboraciones valiosas. En sombra, la espera puede volverse angustia o puedes caer en la hipersensibilidad.",
        tip: "Practica la escucha activa. Sé paciente con los procesos lentos y busca el equilibrio en tus vínculos."
    },
    3: {
        meaning: "El Año Personal 3 es el año de la autoexpresión, la creatividad y la expansión social. Es un tiempo para brillar, comunicarte y disfrutar de los frutos de tu esfuerzo. La energía es alegre y te invita a compartir tus talentos con el mundo. Es ideal para actividades artísticas, viajes y para ampliar tu círculo social.",
        lightAndShadow: "En luz, irradias alegría y magnetismo. En sombra, puedes caer en la dispersión, la exageración o el despilfarro de energía.",
        tip: "Inscríbete en ese curso creativo que postergas. Exprésate honestamente y permite que tu niño interior juegue."
    },
    4: {
        meaning: "El Año Personal 4 demanda trabajo duro, organización y construcción de bases sólidas. Después de la expansión del año 3, toca poner orden. Es un año para enfocarse en los detalles, la salud, las finanzas y la estructura del hogar. La disciplina será tu mejor aliada para materializar tus sueños.",
        lightAndShadow: "En luz, logras avances concretos y duraderos. En sombra, puedes sentirte restringido, pesado o caer en la rigidez extrema.",
        tip: "Organiza tu agenda y tus finanzas con rigor. No descuides tu cuerpo físico y mantén la constancia."
    },
    5: {
        meaning: "El Año Personal 5 es el año del cambio, la libertad y la aventura. Representa el punto medio del ciclo de nueve años. Es un período dinámico donde lo inesperado puede suceder. Te invita a romper con la rutina, explorar nuevos horizontes y adaptarte a las transformaciones que la vida te presenta.",
        lightAndShadow: "En luz, experimentas una liberación emocionante y gran versatilidad. En sombra, la falta de enfoque puede llevarte a la ansiedad o a decisiones imprudentes.",
        tip: "Di 'sí' a lo nuevo. Viaja si puedes, o cambia algo en tu entorno cotidiano. Mantén la flexibilidad mental."
    },
    6: {
        meaning: "El Año Personal 6 se centra en el amor, el hogar, la familia y las responsabilidades afectivas. Es un tiempo para nutrir tus vínculos más cercanos y encontrar armonía en tu espacio personal. Puede haber un enfoque en la belleza, el arte y el servicio a los demás. Es un año para sanar relaciones y brindar apoyo.",
        lightAndShadow: "En luz, vives momentos de profunda calidez y plenitud familiar. En sombra, puedes sentirte abrumado por las cargas ajenas o volverte controlador.",
        tip: "Embellece tu hogar. Dedica tiempo de calidad a tus seres queridos y practica el autocuidado como prioridad."
    },
    7: {
        meaning: "El Año Personal 7 es una 'pausa sagrada' para la introspección, el estudio y el crecimiento espiritual. No es un año para la expansión externa, sino para el viaje interior. Es ideal para meditar, investigar temas profundos y buscar la verdad detrás de las apariencias. Te invita a desarrollar tu sabiduría y conexión espiritual.",
        lightAndShadow: "En luz, alcanzas niveles de conciencia superiores y paz mental. En sombra, puedes caer en el aislamiento melancólico o en el escepticismo frío.",
        tip: "Pasa tiempo a solas en la naturaleza. Lee libros que expandan tu mente y mantén una práctica de meditación diaria."
    },
    8: {
        meaning: "El Año Personal 8 es el año del poder, la cosecha y el éxito material. Tras el trabajo interior del año 7, ahora toca manifestar en el mundo físico. Es un tiempo de gran ambición, autoridad y logros financieros si has sembrado correctamente. La integridad es clave para manejar este flujo de energía.",
        lightAndShadow: "En luz, cosechas grandes éxitos y reconocimiento. En sombra, el materialismo excesivo o el abuso de poder pueden surgir.",
        tip: "Actúa con liderazgo firme pero ético. Toma decisiones valientes en el área profesional y financiera."
    },
    9: {
        meaning: "El Año Personal 9 es el cierre de un ciclo completo. Es un tiempo de balances, limpieza y desapego. Antes de empezar un nuevo ciclo, debes soltar lo que ya no sirve. Es un año emocional, humanitario y de culminaciones. Te invita a perdonar, soltar el pasado y prepararte para el renacimiento.",
        lightAndShadow: "En luz, experimentas una liberación transmutadora y sabiduría. En sombra, el miedo a los finales puede generarte resistencia y dolor.",
        tip: "Haz una limpieza profunda (física y emocional). Cierra etapas pendientes. Practica la compasión y el perdón."
    },
    11: {
        meaning: "El Año Personal 11 es un año maestro de alta intensidad vibratoria. Trae una intuición psíquica agudizada y revelaciones espirituales. Eres un canal de luz e inspiración para otros. No es un año corriente; las sincronicidades y los despertares son frecuentes.",
        lightAndShadow: "En luz, vives una conexión profunda con lo divino y gran claridad. En sombra, la tensión nerviosa y la ansiedad pueden ser desafiantes.",
        tip: "Escucha tus corazonadas con fe absoluta. Mantén tu energía limpia y medita para equilibrar la intensidad."
    },
    22: {
        meaning: "El Año Personal 22 es el año del Maestro Constructor. Tienes el potencial de manifestar visiones a gran escala para el beneficio de muchos. Es un período de gran exigencia pero de logros extraordinarios que perdurarán en el tiempo.",
        lightAndShadow: "En luz, construyes realidades tangibles asombrosas. En sombra, la presión por el éxito puede volverse abrumadora.",
        tip: "Mantén tus pies en la tierra pero tu visión en el cielo. Actúa con disciplina sobre tus sueños más grandes."
    },
    33: {
        meaning: "El Año Personal 33 es un año de servicio amoroso universal y guía compasiva. Es la frecuencia más alta de sanación a través del amor. Estás llamado a ser un faro de esperanza y alivio para el sufrimiento ajeno en este período.",
        lightAndShadow: "En luz, irradias un amor que sana y eleva. En sombra, el autosacrificio extremo puede agotarte si no te cuidas.",
        tip: "Nutre tu propia alma primero para poder guiar a otros desde la plenitud y no desde la carencia."
    }
};
