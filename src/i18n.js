import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          welcome: {
            title: "Communication & Negotiation Style",
            subtitle:
              "Discover your profile based on advanced negotiation techniques.",
            start: "Start Quiz",
            language: "Language",
          },
          quiz: {
            instructions:
              "For each question, assign unique scores (0, 3, 7, 10) to the three statements based on how you think or feel. You cannot repeat scores.",
            next: "Next",
            previous: "Previous",
            submit: "See Results",
            selectScore: "Select",
          },
          results: {
            title: "Your Profile",
            restart: "Restart Quiz",
            conclusion:
              "No style is better than another; the key is adaptability (Situational Leadership).",

            // --- UPDATED TERMINOLOGY (English) ---
            red: {
              title: "Red: Hierarchical (Achievement Motivated)",
              description:
                "You are direct, results-oriented, and productive. In negotiation, you focus on the 'What' and 'When'. You thrive on challenges and quick decisions.",
              advice:
                "Tip: Don't forget to build rapport. Use 'CPC' (Deep Customer Knowledge) to understand the other party's needs before pushing for a decision.",
            },
            blue: {
              title: "Blue: Visionary (Affiliation Motivated)",
              description:
                "You are empathetic, relationship-focused, and value harmony. In negotiation, you focus on the 'Who' and 'How'. You build trust easily.",
              advice:
                "Tip: Watch out for giving away too much to keep the peace. Define your 'MAPAN' (BATNA) clearly before negotiating.",
            },
            green: {
              title: "Green: Pragmatic (Process Motivated)",
              description:
                "You are analytical, detail-oriented, and logical. In negotiation, you focus on the 'Why' and the Data. You prefer reflection and planning.",
              advice:
                "Tip: Analysis is essential, but avoid 'Analysis Paralysis'. Remember that emotions also play a role in decision making.",
            },
            rainbow: {
              title: "Rainbow: Situational Leader",
              description:
                "You are balanced and adapt your style to the context.",
              advice:
                "Tip: Use your adaptability to switch between 'Pushing for Results' and 'Building Relationships' as the situation demands.",
            },
            // Combos
            "red-blue":
              "Red-Bluish: Hierarchical core, but Visionary skills flourish in teamwork.",
            "red-green":
              "Red-Greenish: Hierarchical core, but Pragmatic skills flourish in analysis.",
            "green-red":
              "Green-Reddish: Pragmatic core, but Hierarchical traits emerge under tension.",
            "green-blue":
              "Green-Bluish: Pragmatic core, but Visionary traits flourish in groups.",
            "blue-red":
              "Blue-Reddish: Visionary core, but Hierarchical traits emerge under tension.",
            "blue-green":
              "Blue-Greenish: Visionary core, but Pragmatic traits flourish in analysis.",
          },
          questions: {
            1: {
              text: "I prefer to talk more about:",
              statements: [
                "Action, Results, Productivity",
                "People, Relationships, Persons",
                "Ideas, Reflection, Thoughts",
              ],
            },
            2: {
              text: "Others tell me:",
              statements: [
                "How strong you are!",
                "How cool you are!",
                "Can you advise me?",
              ],
            },
            3: {
              text: "What motivates me to strive is:",
              statements: [
                "Earning more money and thus fulfilling myself",
                "Living as I like",
                "Observing and learning to teach",
              ],
            },
            4: {
              text: "I often ask:",
              statements: [
                "What do I have to do?",
                "Who will I be with?",
                "Why do it that way?",
              ],
            },
            5: {
              text: "I see myself as:",
              statements: [
                "Demanding motivator",
                "Sensitive and cheerful",
                "Innovative and analytical",
              ],
            },
            6: {
              text: "What time means to me:",
              statements: [
                "Gold, I don't want to waste a single minute",
                "To enjoy it with others",
                "I need more to reflect and think",
              ],
            },
            7: {
              text: "I am:",
              statements: [
                "Imposing, there are things that must be done",
                "Extroverted, it helps me relate better",
                "Introverted, there is reason in things",
              ],
            },
            8: {
              text: "I like:",
              statements: [
                "Making others finish their work well",
                "Helping with people's needs",
                "Having time to think and study",
              ],
            },
            9: {
              text: "Regarding humor:",
              statements: [
                "I like laughing at the jokes they tell",
                "I love making others laugh",
                "It's hard for me to understand the point of jokes",
              ],
            },
            10: {
              text: "My emotions:",
              statements: [
                "I like being direct",
                "I give free rein to what I feel",
                "I think a lot before acting or revealing it",
              ],
            },
            11: {
              text: "In the work environment:",
              statements: [
                "If someone fails, it's hard for me to trust them",
                "People make mistakes, but I believe in them",
                "People's attitudes identify them",
              ],
            },
            12: {
              text: "What I need most from people:",
              statements: [
                "To support me in what I do",
                "To accept me for who I am",
                "To recognize my thinking ability",
              ],
            },
            13: {
              text: "Anger:",
              statements: [
                "I get violent easily",
                "I get angry, then forget why",
                "I get upset, but think it's wrong",
              ],
            },
            14: {
              text: "What frustrates me most is:",
              statements: [
                "Postponing something I thought was decided",
                "Being incongruent or insensitive",
                "Being pressured to do something in a hurry",
              ],
            },
            15: {
              text: "Regarding commitment:",
              statements: [
                "I commit to doing many things",
                "I don't like saying 'no' to people",
                "I commit according to my ideals",
              ],
            },
            16: {
              text: "I learn best:",
              statements: [
                "From action, practice, experiments",
                "From dialogue, questions and answers",
                "From what I visualize, designs and drawings",
              ],
            },
            17: {
              text: "I communicate like this:",
              statements: [
                "Direct, I say what I think",
                "Cheerful and I like to please people",
                "Imaginative, I have creative ideas",
              ],
            },
            18: {
              text: "Regarding control:",
              statements: [
                "I take over people and situations",
                "I don't like to command",
                "People should do what they believe they should",
              ],
            },
            19: {
              text: "I talk a lot about:",
              statements: [
                "Movement toward change",
                "Participation and cooperation",
                "Loyalty to the organization's objectives",
              ],
            },
            20: {
              text: "I observe people:",
              statements: [
                "I classify them according to their achievements",
                "I accept them, almost no one bothers me",
                "I study and qualify them according to their attitudes",
              ],
            },
            21: {
              text: "I see life and:",
              statements: [
                "I always seek challenges",
                "I believe love in relationships is key",
                "I seek order and balance in life",
              ],
            },
            22: {
              text: "Talking to people:",
              statements: [
                "I like short and direct phrases",
                "I like dialoguing with people",
                "I'm interested in details and theories",
              ],
            },
            23: {
              text: "Regarding discipline:",
              statements: [
                "What matters to me is complying",
                "I start a lot even if I don't finish everything",
                "What's important is order and processes",
              ],
            },
            24: {
              text: "I think I am:",
              statements: ["Impulsive", "Passionate", "Concentrated"],
            },
            25: {
              text: "Commitments:",
              statements: [
                "I do what I promise, I expect the same from others",
                "I don't like commitments",
                "I commit if I've thought it through well",
              ],
            },
            26: {
              text: "I'm interested in being in:",
              statements: [
                "Control and action",
                "Good relationships",
                "The development of plans",
              ],
            },
            27: {
              text: "Productivity and results:",
              statements: [
                "I have to be productive or I'm not comfortable",
                "I'm more interested in empathy and teamwork",
                "I like designing productive systems",
              ],
            },
          },
        },
      },
      pt: {
        translation: {
          welcome: {
            title: "Estilo de Comunicação e Negociação",
            subtitle:
              "Descubra seu perfil baseado em técnicas avançadas de negociação.",
            start: "Iniciar Quiz",
            language: "Idioma",
          },
          quiz: {
            instructions:
              "Para cada pergunta, atribua pontuações únicas (0, 3, 7, 10) às três afirmações. Você não pode repetir pontuações.",
            next: "Próximo",
            previous: "Anterior",
            submit: "Ver Resultados",
            selectScore: "Selecionar",
          },
          results: {
            title: "Seu Perfil",
            restart: "Reiniciar Quiz",
            conclusion:
              "Nenhum estilo é melhor que o outro; a chave é a adaptabilidade (Liderança Situacional).",

            // --- UPDATED TERMINOLOGY (Portuguese) ---
            red: {
              title: "Vermelho: Hierárquico (Motivado por Conquistas)",
              description:
                "Você é direto, focado em resultados e produtivo. Na negociação, foca no 'O Quê' e 'Quando'. Prospera em desafios e decisões rápidas.",
              advice:
                "Dica: Não esqueça de construir rapport. Use o 'CPC' (Conhecimento Profundo do Cliente) para entender as necessidades do outro antes de pressionar.",
            },
            blue: {
              title: "Azul: Visionário (Motivado por Filiação)",
              description:
                "Você é empático, focado em relacionamentos e valoriza a harmonia. Na negociação, foca no 'Quem' e 'Como'. Constrói confiança facilmente.",
              advice:
                "Dica: Cuidado para não ceder demais para manter a paz. Defina seu 'MAPAN' (Melhor Alternativa) claramente antes de negociar.",
            },
            green: {
              title: "Verde: Pragmático (Motivado por Processos)",
              description:
                "Você é analítico, detalhista e lógico. Na negociação, foca no 'Porquê' e nos Dados. Prefere reflexão, planejamento e lógica.",
              advice:
                "Dica: A análise é essencial, mas evite a 'Paralisia por Análise'. Lembre-se que as emoções também jogam um papel na decisão.",
            },
            rainbow: {
              title: "Arco-íris: Líder Situacional",
              description:
                "Você é equilibrado e adapta seu estilo ao contexto.",
              advice:
                "Dica: Use sua adaptabilidade para alternar entre 'Pressionar por Resultados' e 'Construir Relacionamentos' conforme a situação exige.",
            },
            // Combos
            "red-blue":
              "Vermelho-Azulado: Base Hierárquica, mas habilidades Visionárias florescem em equipe.",
            "red-green":
              "Vermelho-Esverdeado: Base Hierárquica, mas habilidades Pragmáticas florescem na análise.",
            "green-red":
              "Verde-Avermelhado: Base Pragmática, mas traços Hierárquicos surgem sob tensão.",
            "green-blue":
              "Verde-Azulado: Base Pragmática, mas traços Visionários florescem em grupos.",
            "blue-red":
              "Azul-Avermelhado: Base Visionária, mas traços Hierárquicos surgem sob tensão.",
            "blue-green":
              "Azul-Esverdeado: Base Visionária, mas traços Pragmáticos florescem na análise.",
          },
          questions: {
            1: {
              text: "Eu prefiro falar mais sobre:",
              statements: [
                "Ação, Resultados, Produtividade",
                "Pessoas, Relacionamentos, Pessoas",
                "Ideias, Reflexão, Pensamentos",
              ],
            },
            2: {
              text: "Os outros me dizem:",
              statements: [
                "Que forte você é!",
                "Que legal você é!",
                "Você pode me aconselhar?",
              ],
            },
            3: {
              text: "O que me motiva a me esforçar é:",
              statements: [
                "Ganhar mais dinheiro e assim me realizar",
                "Viver como eu gosto",
                "Observar e aprender para ensinar",
              ],
            },
            4: {
              text: "Pergunto frequentemente:",
              statements: [
                "O que eu tenho que fazer?",
                "Com quem eu vou estar?",
                "Por que fazer assim?",
              ],
            },
            5: {
              text: "Eu me vejo assim:",
              statements: [
                "Motivador exigente",
                "Sensível e alegre",
                "Inovador e analítico",
              ],
            },
            6: {
              text: "O que o tempo significa para mim:",
              statements: [
                "Ouro, não quero perder um único minuto",
                "Para desfrutá-lo com os outros",
                "Preciso de mais para refletir e pensar",
              ],
            },
            7: {
              text: "Sou:",
              statements: [
                "Impositivo, há coisas que precisam ser feitas",
                "Extrovertido, me ajuda a me relacionar melhor",
                "Introvertido, há razão nas coisas",
              ],
            },
            8: {
              text: "Eu gosto:",
              statements: [
                "Fazer com que os outros terminem bem seu trabalho",
                "Ajudar com as necessidades das pessoas",
                "Ter tempo para pensar e estudar",
              ],
            },
            9: {
              text: "Quanto ao humor:",
              statements: [
                "Gosto de rir das piadas que contam",
                "Adoro fazer os outros rirem",
                "Me custa entender o fim das piadas",
              ],
            },
            10: {
              text: "Minhas emoções:",
              statements: [
                "Gosto de ser direto",
                "Dou rédea solta ao que sinto",
                "Penso muito antes de agir ou revelá-lo",
              ],
            },
            11: {
              text: "No ambiente de trabalho:",
              statements: [
                "Se alguém falha, me custa confiar nele",
                "As pessoas erram, mas acredito nelas",
                "As atitudes das pessoas as identificam",
              ],
            },
            12: {
              text: "O que mais preciso das pessoas:",
              statements: [
                "Que me apoiem no que faço",
                "Que me aceitem pelo que sou",
                "Que reconheçam minha capacidade de pensar",
              ],
            },
            13: {
              text: "A raiva:",
              statements: [
                "Me violento facilmente",
                "Me irrito, depois esqueço o porquê",
                "Me incomodo, mas penso que está errado",
              ],
            },
            14: {
              text: "O que mais me frustra é:",
              statements: [
                "Adiar algo que pensei que já foi decidido",
                "Ser incongruente ou insensível",
                "Me pressionarem a fazer algo às pressas",
              ],
            },
            15: {
              text: "Quanto ao compromisso:",
              statements: [
                "Me comprometo a fazer muitas coisas",
                "Não gosto de dizer 'não' às pessoas",
                "De acordo com meus ideais me comprometo",
              ],
            },
            16: {
              text: "Aprendo melhor:",
              statements: [
                "Da ação, prática, experimentos",
                "Do diálogo, perguntas e respostas",
                "Do que visualizo, designs e desenhos",
              ],
            },
            17: {
              text: "Me comunico assim:",
              statements: [
                "Direto, digo o que penso",
                "Alegre e gosto de agradar as pessoas",
                "Imaginativo, tenho ideias criativas",
              ],
            },
            18: {
              text: "Quanto ao controle:",
              statements: [
                "Me apodero das pessoas e situações",
                "Não gosto de mandar",
                "As pessoas devem fazer o que acreditam que devem",
              ],
            },
            19: {
              text: "Falo muito de:",
              statements: [
                "Movimento para a mudança",
                "Participação e cooperação",
                "Lealdade aos objetivos da organização",
              ],
            },
            20: {
              text: "Observo as pessoas:",
              statements: [
                "As classifico de acordo com suas conquistas",
                "As aceito, quase ninguém me cai mal",
                "As estudo e qualifico de acordo com suas atitudes",
              ],
            },
            21: {
              text: "Vejo a vida e:",
              statements: [
                "Sempre busco os desafios",
                "Acredito que o amor nas relações é a chave",
                "Busco ordem e equilíbrio na vida",
              ],
            },
            22: {
              text: "Falando com as pessoas:",
              statements: [
                "Gosto de frases curtas e diretas",
                "Gosto de dialogar com as pessoas",
                "Me interessam os detalhes e as teorias",
              ],
            },
            23: {
              text: "Quanto à disciplina:",
              statements: [
                "O que me importa é cumprir",
                "Começo muito embora não termine tudo",
                "O importante é a ordem e os processos",
              ],
            },
            24: {
              text: "Acho que sou:",
              statements: ["Impulsivo", "Apaixonado", "Concentrado"],
            },
            25: {
              text: "Os compromissos:",
              statements: [
                "Faço o que prometo, espero o mesmo dos outros",
                "Não gosto dos compromissos",
                "Me comprometo, se pensei bem nisso",
              ],
            },
            26: {
              text: "Me interessa estar em:",
              statements: [
                "O controle e a ação",
                "As boas relações",
                "O desenvolvimento de planos",
              ],
            },
            27: {
              text: "A produtividade e os resultados:",
              statements: [
                "Tenho que ser produtivo ou não estou à vontade",
                "Me interessa mais a empatia e o trabalho em equipe",
                "Gosto de projetar sistemas produtivos",
              ],
            },
          },
        },
      },
      es: {
        translation: {
          welcome: {
            title: "Estilo de Comunicación y Negociación",
            subtitle:
              "Descubre tu perfil basado en técnicas avanzadas de negociación.",
            start: "Iniciar Quiz",
            language: "Idioma",
          },
          quiz: {
            instructions:
              "Para cada pregunta, asigna puntuaciones únicas (0, 3, 7, 10) a las tres afirmaciones. No puedes repetir puntuaciones.",
            next: "Siguiente",
            previous: "Anterior",
            submit: "Ver Resultados",
            selectScore: "Seleccionar",
          },
          results: {
            title: "Tu Perfil",
            restart: "Reiniciar Quiz",
            conclusion:
              "Ningún estilo es mejor que otro; la clave es la adaptabilidad (Liderazgo Situacional).",

            // --- UPDATED TERMINOLOGY (Spanish - Source Material) ---
            red: {
              title: "Rojo: Jerárquico (Motivado al Logro)",
              description:
                "Eres directo, enfocado en resultados y productivo. En negociación, te enfocas en el 'Qué' y 'Cuándo'. Prosperas en desafíos y decisiones rápidas.",
              advice:
                "Tip: No olvides construir rapport. Usa el 'CPC' (Conocimiento Profundo del Cliente) para entender las necesidades del otro antes de presionar.",
            },
            blue: {
              title: "Azul: Visionario (Motivado a la Filiación)",
              description:
                "Eres empático, enfocado en relaciones y valoras la armonía. En negociación, te enfocas en el 'Quién' y 'Cómo'. Construyes confianza fácilmente.",
              advice:
                "Tip: Cuidado con ceder demasiado por mantener la paz. Define tu 'MAPAN' (Mejor Alternativa) claramente antes de negociar.",
            },
            green: {
              title: "Verde: Pragmático (Motivado a Procesos)",
              description:
                "Eres analítico, detallista y lógico. En negociación, te enfocas en el 'Por qué' y los Datos. Prefieres la reflexión y planificación.",
              advice:
                "Tip: El análisis es esencial, pero evita la 'Parálisis por Análisis'. Recuerda que las emociones también juegan un rol en la decisión.",
            },
            rainbow: {
              title: "Arcoíris: Líder Situacional",
              description:
                "Eres equilibrado y adaptas tu estilo según el contexto.",
              advice:
                "Tip: Usa tu adaptabilidad para alternar entre 'Presionar por Resultados' y 'Construir Relaciones' según lo exija la situación.",
            },
            // Combos
            "red-blue":
              "Rojo-Azulado: Base Jerárquica, pero habilidades Visionarias florecen en equipo.",
            "red-green":
              "Rojo-Verdoso: Base Jerárquica, pero habilidades Pragmáticas florecen en análisis.",
            "green-red":
              "Verde-Rojizo: Base Pragmática, pero rasgos Jerárquicos surgen bajo tensión.",
            "green-blue":
              "Verde-Azulado: Base Pragmática, pero rasgos Visionarios florecen en grupos.",
            "blue-red":
              "Azul-Rojizo: Base Visionaria, pero rasgos Jerárquicos surgen bajo tensión.",
            "blue-green":
              "Azul-Verdoso: Base Visionaria, pero rasgos Pragmáticos florecen en análisis.",
          },
          questions: {
            1: {
              text: "Yo prefiero hablar más de:",
              statements: [
                "La Acción, Resultados, Productividad",
                "La Gente, Relaciones, Personas",
                "Las ideas, Reflexión, Pensamientos",
              ],
            },
            2: {
              text: "Los demás me dicen:",
              statements: [
                "¡Qué fuerte eres!",
                "¡Qué buena onda eres!",
                "¿Me puedes aconsejar?",
              ],
            },
            3: {
              text: "Lo que me motiva a esforzarme es:",
              statements: [
                "Ganar más dinero y así realizarme",
                "Vivir como a mí me gusta",
                "Observar y aprender para enseñar",
              ],
            },
            4: {
              text: "Pregunto a menudo:",
              statements: [
                "¿Qué tengo que hacer?",
                "¿Con quién voy a estar?",
                "Por qué hacerlo así?",
              ],
            },
            5: {
              text: "Yo me veo así:",
              statements: [
                "Motivador exigente",
                "Sensible y alegre",
                "Innovador y analítico",
              ],
            },
            6: {
              text: "Lo que el tiempo significa para mí:",
              statements: [
                "Oro, no quiero perder un solo minuto",
                "Para disfrutarlo con los demás",
                "Necesito más para reflexionar y pensar",
              ],
            },
            7: {
              text: "Soy:",
              statements: [
                "Impositivo, hay cosas que hay que hacer",
                "Extrovertido, me hace relacionarme mejor",
                "Introvertido, hay razón en las cosas",
              ],
            },
            8: {
              text: "Me gusta:",
              statements: [
                "Hacer que otros terminen su trabajo bien",
                "Ayudar con las necesidades de la gente",
                "Tener tiempo para pensar y estudiar",
              ],
            },
            9: {
              text: "En cuanto al humor:",
              statements: [
                "Me gusta reírme de los chistes que cuentan",
                "Me encanta hacer reír a otros",
                "Me cuesta entender el fin de los chistes",
              ],
            },
            10: {
              text: "Mis emociones:",
              statements: [
                "Me gusta ser directo",
                "Doy rienda suelta a lo que siento",
                "Pienso mucho antes de actuar o revelarlo",
              ],
            },
            11: {
              text: "En el ambiente laboral:",
              statements: [
                "Si alguien falla, me cuesta confiar en él",
                "La gente se equivoca, pero creo en ella",
                "Las actitudes de la gente les identifica",
              ],
            },
            12: {
              text: "Lo que más necesito de la gente:",
              statements: [
                "Que me apoyen en lo que hago",
                "Que me acepten por quien soy",
                "Que reconozcan mi capacidad de pensar",
              ],
            },
            13: {
              text: "El enojo:",
              statements: [
                "Me violento fácilmente",
                "Me enfado, después olvido el por qué",
                "Me molesto, pero pienso que está mal",
              ],
            },
            14: {
              text: "Lo que más me frustra es:",
              statements: [
                "Posponer algo que pensé que ya fue decidido",
                "Que sea incongruente o insensible",
                "Que me presionen a hacer algo de prisa",
              ],
            },
            15: {
              text: "En cuanto al compromiso:",
              statements: [
                "Me comprometo hacer muchas cosas",
                "No me gusta decir que 'no' a la gente",
                "De acuerdo con mis ideales me comprometo",
              ],
            },
            16: {
              text: "Aprendo mejor:",
              statements: [
                "De la acción, la práctica, los experimentos",
                "Del diálogo, preguntas y respuestas",
                "De lo que visualizo, diseños y dibujos",
              ],
            },
            17: {
              text: "Me comunico así:",
              statements: [
                "Directo, digo lo que pienso",
                "Alegre y me gusta complacer a la gente",
                "Imaginativo, tengo ideas creativas",
              ],
            },
            18: {
              text: "En cuanto al control:",
              statements: [
                "Me apodero de la gente y las situaciones",
                "No me gusta mandar",
                "La gente debe hacer lo que cree que debe",
              ],
            },
            19: {
              text: "Hablo mucho de:",
              statements: [
                "Movimiento hacia el cambio",
                "Participación y cooperación",
                "Lealtad a los objetivos de la organización",
              ],
            },
            20: {
              text: "Observo a la gente:",
              statements: [
                "Las clasifico según sus logros",
                "Las acepto, casi nadie me cae mal",
                "Las estudio y califico según sus actitudes",
              ],
            },
            21: {
              text: "Veo la vida y:",
              statements: [
                "Siempre busco los desafíos",
                "Creo que el amor en las relaciones es la clave",
                "Busco orden y equilibrio en la vida",
              ],
            },
            22: {
              text: "Hablando con la gente:",
              statements: [
                "Me gustan las frases cortas y directas",
                "Me gusta dialogar con la gente",
                "Me interesa los detalles y las teorías",
              ],
            },
            23: {
              text: "En cuanto a la disciplina:",
              statements: [
                "Lo que me importa es cumplir",
                "Empiezo mucho aunque no termino todo",
                "Lo importante es el orden y los procesos",
              ],
            },
            24: {
              text: "Creo que soy:",
              statements: ["Impulsivo", "Apasionado", "Concentrado"],
            },
            25: {
              text: "Los compromisos:",
              statements: [
                "Hago lo que prometo, lo mismo espero de otros",
                "No me gustan los compromisos",
                "Me comprometo, si he pensado bien en lo",
              ],
            },
            26: {
              text: "Me interesa estar en:",
              statements: [
                "El control y la acción",
                "Las buenas relaciones",
                "El desarrollo de planes",
              ],
            },
            27: {
              text: "La productividad y los resultados:",
              statements: [
                "Tengo que ser productivo o no estoy a gusto",
                "Me interesa más la empatía y el trabajo en equipo",
                "Me gusta diseñar sistemas productivos",
              ],
            },
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
