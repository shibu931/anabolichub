import HomePage from "@/components/Homepage/HomePage";
import { ConfidentialityIcon, EnergyIcon, FatBurnerIcon, GrowthIcon, HealthIcon, InjectableSteroidsIcon, OralSteroidsIcon, PCTIcon, PricingIcon, QualityIcon, SARMSIcon, SexIcon, SupportIcon, VarietyIcon } from "@/components/Icons/Icons";
import Link from "next/link";

const uspData = [
  {
    icon: QualityIcon,
    title: "Hochwertige Produkte",
    description: "Wir beziehen unsere Produkte von vertrauenswürdigen Herstellern und führen strenge Qualitätskontrollen durch, um Reinheit, Wirksamkeit und Sicherheit zu gewährleisten."
  },
  {
    icon: VarietyIcon,
    title: "Umfangreiche Auswahl",
    description: "Von injizierbaren Steroiden bis hin zu Post-Cycle-Therapie-Lösungen (PCT) ist unser Katalog darauf ausgerichtet, die vielfältigen Bedürfnisse unserer Kunden zu erfüllen."
  },
  {
    icon: SupportIcon,
    title: "Experten-Support",
    description: "Unser Team steht Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten und Sie zu den Produkten zu führen, die am besten zu Ihren Zielen passen."
  },
  {
    icon: ConfidentialityIcon,
    title: "Vertraulichkeit und Diskretion",
    description: "Ihre Privatsphäre ist unsere Priorität. Alle Bestellungen werden diskret versandt, um Ihre Vertraulichkeit zu gewährleisten."
  },
  {
    icon: PricingIcon,
    title: "Wettbewerbsfähige Preise",
    description: "Wir glauben, dass überlegene Gesundheit und Leistung zugänglich sein sollten. Deshalb bieten wir erstklassige Produkte zu erschwinglichen Preisen an."
  }
];

export default async function Home() {

  const latestProducts = await fetch('http://localhost:3000/api/products?type=latest&limit=5');
  const bestSellingProducts = await fetch('http://localhost:3000/api/products?type=best-selling&limit=5');
  const oralSteroids = await fetch('http://localhost:3000/api/products?type=category&category=orale-steroiden&limit=4');
  const Peptide = await fetch('http://localhost:3000/api/products?type=category&category=peptide&limit=5');
  const injectibleSteroids = await fetch('http://localhost:3000/api/products?type=category&category=injizierbare-steroide&limit=4');

  const data = {
    latestProducts: await latestProducts.json(),
    bestSellingProducts: await bestSellingProducts.json(),
    oralSteroids: await oralSteroids.json(),
    Peptide: await Peptide.json(),
    injectibleSteroids: await injectibleSteroids.json(),
  }


  return (
    <main className="container xl:w-[1280px] mx-auto mt-5">
      <HomePage data={data} />

      <section className="article mt-8 px-5 lg:px-0">
        <h1 className="h1 md:py-2 p-1">Willkommen bei AnabolicHub.com - Ihre vertrauenswürdige Quelle für Leistungs- und Wellnesslösungen</h1>
        <p>Bei <Link href="/">AnabolicHub.com</Link> wissen wir, dass das Erreichen Ihrer Fitness- und Wellnessziele eine Reise ist, die Engagement, Disziplin und die richtigen Hilfsmittel erfordert. Deshalb haben wir uns zum Ziel gesetzt, Ihnen ein umfassendes Sortiment an Premiumprodukten anzubieten, die Ihre Gesundheit, Leistung und Regeneration unterstützen. Egal, ob Sie ein erfahrener Athlet, ein Fitnessenthusiast oder jemand sind, der sich auf eine transformative Reise begibt, wir haben alles, was Sie brauchen, um Ihr Potenzial zu entfalten und Spitzenleistungen zu erzielen.</p>
        <h2 className="!mb-4">Warum Sie sich für AnabolicHub.com entscheiden sollten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {
            uspData.map((item, index) => (
              <div className="col-span-1 w-full h-full" key={index}>
                <div className="flex items-start bg-white border h-full border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full">
                  <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                    <item.icon className={"w-10"} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <h2 className="!mb-4">Entdecken Sie unsere Produktkategorien</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 sm:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <InjectableSteroidsIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Injizierbare Steroide</h3>
                <p className="text-gray-600 text-sm">Injizierbare Steroide sind eine beliebte Wahl für Personen, die nach signifikantem Muskelaufbau, gesteigerter Kraft und verbesserter sportlicher Leistung streben. Auf AnabolicHub.com bieten wir eine breite Palette an injizierbaren Optionen an, darunter:</p>
                <ul className="text-sm mb-2 list-disc ps-5">
                  <li><strong>Testosteron-Varianten</strong> (z. B. Testosteron Enanthate, Testosteron Cypionate, Testosteron Propionat)</li>
                  <li><strong>Nandrolon-Derivate</strong> (z. B. Deca-Durabolin, Nandrolon Phenylpropionat)</li>
                  <li><strong>Boldenon Undecylenat (Equipoise)</strong></li>
                  <li><strong>Trenbolonacetat und Trenbolonenanthate</strong></li>
                  <li><strong>Drostanolon (Masteron)</strong></li>
                  <li><strong>Primobolan (Methenolon Enanthate)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte sind ideal für Bodybuilder und Sportler, die ihre fettfreie Muskelmasse erhöhen, die Erholungszeit verkürzen und Spitzenleistungen erzielen möchten.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <OralSteroidsIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Orale Steroide</h3>
                <p className="text-gray-600 text-sm">Orale Steroide bieten Bequemlichkeit und Wirksamkeit und sind somit eine ausgezeichnete Wahl für diejenigen, die Injektionen vermeiden möchten. Unsere Auswahl umfasst:</p>
                <ul className="list-disc text-sm">
                  <li><strong>Dianabol (Methandienon)</strong></li>
                  <li><strong>Anavar (Oxandrolon)</strong></li>
                  <li><strong>Winstrol (Stanozolol)</strong></li>
                  <li><strong>Anadrol (Oxymetholon)</strong></li>
                  <li><strong>Turinabol (Chlordehydromethyltestosteron)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Verbindungen sind bekannt für ihre Fähigkeit, das Muskelwachstum zu fördern, die Ausdauer zu steigern und die allgemeine Kraft zu verbessern.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <OralSteroidsIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Peptide</h3>
                <p className="text-gray-600 text-sm">Peptide sind kurze Ketten von Aminosäuren, die entscheidende Rollen in verschiedenen Körperfunktionen spielen. Sie werden für eine Vielzahl von Zwecken eingesetzt, darunter:</p>
                <ul className="list-disc text-sm">
                  <li><strong>Muskelwachstum und Regeneration:</strong> Peptide wie Wachstumshormon-Releasing-Hormone (GHRHs) und Wachstumshormon-Releasing-Peptide (GHRPs) stimulieren die Freisetzung von Wachstumshormonen, was das Muskelwachstum, den Fettabbau und eine schnellere Erholung fördert.</li>
                  <li><strong>Fettabbau:</strong> Einige Peptide, wie z. B. AOD-9604, sind speziell auf den Fettabbau ausgerichtet, indem sie die fettverbrennenden Effekte von Wachstumshormonen nachahmen.</li>
                  <li><strong>Verbesserter Schlaf:</strong> Peptide wie das Delta-Schlaf-induzierende Peptid (DSIP) können die Schlafqualität verbessern und einen erholsamen Schlaf fördern.</li>
                  <li><strong>Verbesserte Hautgesundheit:</strong> Kollagenpeptide und andere Peptide können die Hautelastizität verbessern, Falten reduzieren und ein jugendliches Aussehen fördern.</li>
                  <li><strong>Gesteigerte Libido:</strong> Bestimmte Peptide können dazu beitragen, die sexuelle Funktion und die Libido zu verbessern.</li>
                </ul>
                <p className="text-gray-600 text-sm">Auf AnabolicHub.com bieten wir eine vielfältige Auswahl an hochwertigen Peptiden zur Unterstützung Ihrer Gesundheits- und Fitnessziele.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <FatBurnerIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fettverbrenner</h3>
                <p className="text-gray-600 text-sm">Unsere Auswahl an Fettverbrennern wurde entwickelt, um Ihnen beim Abbau von Übergewicht und der Erreichung eines schlanken, definierten Körpers zu helfen. Beliebte Optionen sind:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Clenbuterol</strong></li>
                  <li><strong>Cytomel (T3)</strong></li>
                  <li><strong>Ephedrin</strong></li>
                  <li><strong>Thermogene Mischungen</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte wirken, indem sie Ihren Stoffwechsel ankurbeln, den Appetit unterdrücken und das Energieniveau steigern. Dadurch sind sie eine hervorragende Ergänzung für jede Gewichtsabnahme.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <SexIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nahrungsergänzungsmittel zur Unterstützung der sexuellen Gesundheit</h3>
                <p className="text-gray-600 text-sm">Ein gesunder und aktiver Lebensstil beinhaltet auch die Berücksichtigung der sexuellen Gesundheit. Unsere Kollektion an Nahrungsergänzungsmitteln zur Unterstützung der sexuellen Gesundheit umfasst:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Viagra (Sildenafil)</strong></li>
                  <li><strong>Cialis (Tadalafil)</strong></li>
                  <li><strong>Pflanzliche Libido-Booster</strong></li>
                  <li><strong>Produkte auf Prohormonbasis</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Nahrungsergänzungsmittel sind formuliert, um die Libido zu steigern, die Ausdauer zu verbessern und das allgemeine sexuelle Wohlbefinden zu unterstützen.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <GrowthIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Humanes Wachstumshormon (HGH) und Peptide</h3>
                <p className="text-gray-600 text-sm">HGH und Peptide sind wirkungsvolle Mittel zur Anti-Aging, für Muskelwachstum und Regeneration. Wir bieten eine breite Palette dieser Produkte an, darunter:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Somatropin (Humanes Wachstumshormon)</strong></li>
                  <li><strong>Ipamorelin</strong></li>
                  <li><strong>Sermorelin</strong></li>
                  <li><strong>BPC-157</strong></li>
                  <li><strong>TB-500</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte werden von Sportlern und Fitnessbegeisterten geschätzt, um die Gewebereparatur zu fördern, die Hautelastizität zu verbessern und die allgemeine Vitalität zu steigern.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <SARMSIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">SARMs (Selektive Androgenrezeptor-Modulatoren)</h3>
                <p className="text-gray-600 text-sm">SARMs sind eine hochmoderne Lösung für diejenigen, die ihre Zuwächse maximieren möchten, ohne die Nebenwirkungen, die üblicherweise mit Steroiden verbunden sind. Unsere Kollektion umfasst:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Ostarin (MK-2866)</strong></li>
                  <li><strong>Ligandrol (LGD-4033)</strong></li>
                  <li><strong>Andarin (S4)</strong></li>
                  <li><strong>Cardarin (GW-501516)</strong></li>
                  <li><strong>Ibutamoren (MK-677)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte sind hochwirksam zur Steigerung der fettfreien Muskelmasse, zur Verbesserung der Ausdauer und zur Beschleunigung des Fettabbaus.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <EnergyIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Energiesupplemente</h3>
                <p className="text-gray-600 text-sm">Bleiben Sie energiegeladen und erbringen Sie Höchstleistungen mit unserer Auswahl an energiesteigernden Supplementen. Beliebte Optionen sind:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Pre-Workout-Formeln</strong></li>
                  <li><strong>Booster auf Koffeinbasis</strong></li>
                  <li><strong>B-Vitaminkomplexe</strong></li>
                  <li><strong>Kreatinmischungen</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte wurden entwickelt, um Fokus, Ausdauer und die allgemeine Leistungsfähigkeit während intensiver Trainingseinheiten zu verbessern.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <HealthIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Gesundheitsprodukte</h3>
                <p className="text-gray-600 text-sm">Ihre Gesundheit hat für uns oberste Priorität. Unser Sortiment an Gesundheitsprodukten umfasst Optionen zur Unterstützung der Leberfunktion, der Herzgesundheit, der Gelenkpflege und mehr:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Mariendistel (Leberunterstützung)</strong></li>
                  <li><strong>Omega-3-Fettsäuren</strong></li>
                  <li><strong>Glucosamin und Chondroitin</strong></li>
                  <li><strong>Multivitamine</strong></li>
                  <li><strong>Antioxidantien-Mischungen</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Nahrungsergänzungsmittel sind unerlässlich für die Erhaltung des allgemeinen Wohlbefindens und stellen sicher, dass Ihr Körper Höchstleistungen erbringt.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <PCTIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Post-Cycle-Therapie (PCT)</h3>
                <p className="text-gray-600 text-sm">Die PCT ist entscheidend für die Wiederherstellung des Hormonhaushalts nach einem Steroid- oder SARM-Zyklus. Unsere PCT-Lösungen umfassen:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Clomid (Clomiphencitrat)</strong></li>
                  <li><strong>Nolvadex (Tamoxifencitrat)</strong></li>
                  <li><strong>HCG (Humanes Choriongonadotropin)</strong></li>
                  <li><strong>Natürliche Testosteron-Booster</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">Diese Produkte helfen, Nebenwirkungen zu minimieren, Ihre Gewinne zu schützen und einen reibungslosen Erholungsprozess zu gewährleisten.</p>
              </div>
            </div>
          </div>

        </div>

        <h2>Unser Versprechen an Ihren Erfolg</h2>
        <p>Auf AnabolicHub.com sind wir mehr als nur ein Lieferant. Wir sind Ihr Partner beim Erreichen Ihrer Gesundheits- und Fitnessziele. Folgendes hat für uns Priorität:</p>
        <ul className="list-disc ps-4 mb-4">
          <li><strong>Bildung:</strong> Unser Blog und unser Ressourcenbereich bieten ausführliche Informationen, damit Sie fundierte Entscheidungen über Ihre Gesundheit und Leistung treffen können.</li>
          <li><strong>Kundenzufriedenheit:</strong> Ihr Feedback treibt uns an, unsere Angebote zu verbessern und zu erweitern.</li>
          <li><strong>Innovation:</strong> Wir aktualisieren unser Sortiment kontinuierlich, um die neuesten Fortschritte bei leistungssteigernden Produkten aufzunehmen.</li>
        </ul>

        <h3>Kaufen Sie mit Vertrauen</h3>
        <p>Wenn Sie sich für AnabolicHub.com entscheiden, wählen Sie eine vertrauenswürdige Quelle für:</p>
        <ul className="list-disc ps-4 mb-4">
          <li><strong>Hochwertige Originalprodukte</strong></li>
          <li><strong>Sichere Zahlungsoptionen</strong></li>
          <li><strong>Schneller und diskreter Versand</strong></li>
          <li><strong>Hervorragenden Kundenservice</strong></li>
        </ul>

        <p>Machen Sie noch heute den ersten Schritt in Richtung Ihrer Ziele. Stöbern Sie in unserem umfangreichen Katalog und entdecken Sie, warum unzählige Kunden AnabolicHub.com für ihre Leistungs- und Wellnessbedürfnisse vertrauen.</p>

        <h3>Machen Sie noch heute den ersten Schritt</h3>
        <p>Ihre Reise zu Spitzenleistungen und unvergleichlichem Wohlbefinden beginnt hier. Durchstöbern Sie unseren Katalog, finden Sie die Produkte, die Ihren Zielen entsprechen, und lassen Sie sich von uns auf jedem Schritt begleiten. Gemeinsam können wir Ihr Potenzial freisetzen und Großartiges erreichen.</p>
        <h4>Entdecken, engagieren, transformieren – Willkommen bei AnabolicHub.com!</h4>

        <h2>Häufig gestellte Fragen (FAQ)</h2>

        <h3>1. Was ist AnabolicHub.com?</h3>
        <p>AnabolicHub.com ist eine vertrauenswürdige Online-Plattform, die Bodybuilding-, Fitness- und Gesundheitsbegeisterten zuverlässige Informationen, Ressourcen und hochwertige Produkte anbietet. Wir haben uns auf anabole Nahrungsergänzungsmittel, Trainingstipps und fachkundige Beratung spezialisiert, um Ihnen dabei zu helfen, Ihre Fitnessziele sicher und effektiv zu erreichen.</p>

        <h3>2. Sind die Produkte auf AnabolicHub.com sicher in der Anwendung?</h3>
        <p>Ja, alle auf AnabolicHub.com angebotenen Produkte stammen von renommierten Herstellern und unterliegen strengen Qualitätskontrollen, um Sicherheit und Wirksamkeit zu gewährleisten. Wir bieten außerdem detaillierte Nutzungsrichtlinien an und empfehlen Ihnen, vor Beginn einer neuen Nahrungsergänzungsmittelkur einen Arzt zu konsultieren.</p>

        <h3>3. Bieten Sie weltweiten Versand an?</h3>
        <p>Ja, AnabolicHub.com bietet weltweiten Versand an. Ob Sie in den USA, Europa, Asien oder anderswo sind, wir bemühen uns, Ihre Produkte schnell und sicher zu liefern. Informieren Sie sich in unseren Versandbedingungen über die geschätzten Lieferzeiten und eventuelle regionale Beschränkungen.</p>

        <h3>4. Können Anfänger die auf AnabolicHub.com verfügbaren Nahrungsergänzungsmittel verwenden?</h3>
        <p>Absolut. Wir bieten eine Reihe von Produkten an, die für alle Erfahrungsstufen geeignet sind, einschließlich Anfänger. Jedes Produkt wird mit einer klaren Anleitung geliefert, und unser Support-Team hilft Ihnen gerne bei der Auswahl der richtigen Nahrungsergänzungsmittel für Ihre Fitnessreise.</p>

        <h3>5. Wie kann ich meine Bestellung verfolgen?</h3>
        <p>Sobald Ihre Bestellung versandt wurde, erhalten Sie per E-Mail eine Trackingnummer. Mit dieser Nummer können Sie den Fortschritt Ihres Pakets über unsere Website oder das Tracking-System des Spediteurs verfolgen.</p>

        <h3>6. Bietet AnabolicHub.com ein Rückgaberecht an?</h3>
        <p>Ja, wir haben ein kundenfreundliches Rückgaberecht. Wenn Sie mit Ihrem Kauf nicht zufrieden sind oder ein beschädigtes Produkt erhalten haben, wenden Sie sich innerhalb von 30 Tagen nach Lieferung an unser Support-Team, um eine problemlose Lösung zu finden. Weitere Informationen finden Sie auf unserer Seite zu Rückgaben und Rückerstattungen.</p>
      </section>
    </main>
  );
}
