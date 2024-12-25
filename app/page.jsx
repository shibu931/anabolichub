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
    <main className="container mx-auto mt-5">
      <HomePage data={data} />

      <section className="article mt-8 px-5 lg:px-0">
        <h1 class="h1 md:py-2 p-1">Willkommen bei AnabolicHub.com - Ihre vertrauenswürdige Quelle für Leistungs- und Wellnesslösungen</h1>
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

        <h2 className="!mb-4">Explore Our Product Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 sm:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <InjectableSteroidsIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Injectable Steroids</h3>
                <p className="text-gray-600 text-sm">Injectable steroids are a popular choice for individuals seeking significant muscle growth, enhanced strength, and improved athletic performance. At AnabolicHub.com, we offer a wide variety of injectable options, including:</p>
                <ul className="text-sm mb-2 list-disc ps-5">
                  <li><strong>Testosterone Variants</strong>  (e.g., Testosterone Enanthate, Testosterone Cypionate, Testosterone Propionate)</li>
                  <li><strong>Nandrolone Derivatives</strong> (e.g., Deca-Durabolin, Nandrolone Phenylpropionate)
                  </li>
                  <li><strong>Boldenone Undecylenate (Equipoise)</strong></li>
                  <li><strong>Trenbolone Acetate and Trenbolone Enanthate</strong></li>
                  <li><strong>Drostanolone (Masteron)</strong></li>
                  <li><strong>Primobolan (Methenolone Enanthate)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products are ideal for bodybuilders and athletes looking to increase lean muscle mass, reduce recovery time, and achieve peak performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <OralSteroidsIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Oral Steroids</h3>
                <p className="text-gray-600 text-sm">Oral steroids offer convenience and effectiveness, making them an excellent choice for those who prefer not to use injections. Our selection includes:</p>
                <ul className="list-disc text-sm ps-4">
                  <li><strong>Dianabol (Methandienone)</strong></li>
                  <li><strong>Anavar (Oxandrolone)</strong></li>
                  <li><strong>Winstrol (Stanozolol)</strong></li>
                  <li><strong>Anadrol (Oxymetholone)</strong></li>
                  <li><strong>Turinabol (Chlorodehydromethyltestosterone)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These compounds are known for their ability to enhance muscle growth, boost endurance, and improve overall strength.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <FatBurnerIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fat Burners</h3>
                <p className="text-gray-600 text-sm">Our range of fat burners is designed to help you shed excess weight and achieve a lean, sculpted physique. Popular options include:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Clenbuterol</strong></li>
                  <li><strong>Cytomel (T3)</strong></li>
                  <li><strong>Ephedrine</strong></li>
                  <li><strong>Thermogenic Blends</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products work by increasing your metabolic rate, suppressing appetite, and enhancing energy levels, making them an excellent addition to any weight loss regimen.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <SexIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sex Support Supplements</h3>
                <p className="text-gray-600 text-sm">Maintaining a healthy and active lifestyle includes addressing sexual health. Our collection of sex support supplements includes:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Viagra (Sildenafil)</strong></li>
                  <li><strong>Cialis (Tadalafil)</strong></li>
                  <li><strong>Herbal Libido Boosters</strong></li>
                  <li><strong>Prohormone-Based Products</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These supplements are formulated to enhance libido, improve stamina, and support overall sexual wellness.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <GrowthIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Human Growth Hormone (HGH) and Peptides</h3>
                <p className="text-gray-600 text-sm">HGH and peptides are powerful tools for anti-aging, muscle growth, and recovery. We offer a wide range of these products, including:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Somatropin (Human Growth Hormone)</strong></li>
                  <li><strong>Ipamorelin</strong></li>
                  <li><strong>Sermorelin</strong></li>
                  <li><strong>BPC-157</strong></li>
                  <li><strong>TB-500</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products are trusted by athletes and fitness enthusiasts to promote tissue repair, enhance skin elasticity, and boost overall vitality.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <SARMSIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sarms (Selective Androgen Receptor Modulators)</h3>
                <p className="text-gray-600 text-sm">SARMs are a cutting-edge solution for those looking to maximize their gains without the side effects commonly associated with steroids. Our collection includes:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Ostarine (MK-2866)</strong></li>
                  <li><strong>Ligandrol (LGD-4033)</strong></li>
                  <li><strong>Andarine (S4)</strong></li>
                  <li><strong>Cardarine (GW-501516)</strong></li>
                  <li><strong>Ibutamoren (MK-677)</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products are highly effective for increasing lean muscle mass, improving endurance, and accelerating fat loss.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <EnergyIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Energy Supplements</h3>
                <p className="text-gray-600 text-sm">Stay energized and perform at your best with our range of energy-boosting supplements. Popular choices include:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Pre-Workout Formulas</strong></li>
                  <li><strong>Caffeine-Based Boosters</strong></li>
                  <li><strong>B-Vitamin Complexes</strong></li>
                  <li><strong>Creatine Blends</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products are designed to enhance focus, stamina, and overall performance during intense training sessions.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <HealthIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Health Products</h3>
                <p className="text-gray-600 text-sm">Your health is our top priority. Our health product range includes options to support liver function, heart health, joint care, and more:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Milk Thistle (Liver Support)</strong></li>
                  <li><strong>Omega-3 Fatty Acids</strong></li>
                  <li><strong>Glucosamine and Chondroitin</strong></li>
                  <li><strong>Multivitamins</strong></li>
                  <li><strong>Antioxidant Blends</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These supplements are essential for maintaining overall wellness and ensuring your body performs at its best.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 w-full">
            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md p-2 lg:p-3 w-full h-full">
              <div className="flex items-center justify-center w-10 ms-1 mt-1 p-2 h-10 bg-primary text-white rounded-md mr-5">
                <PCTIcon className={'w-10'} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Post Cycle Therapy (PCT)</h3>
                <p className="text-gray-600 text-sm">PCT is crucial for restoring hormonal balance after a cycle of steroids or SARMs. Our PCT solutions include:</p>
                <ul className="text-sm ps-4 list-disc">
                  <li><strong>Clomid (Clomiphene Citrate)</strong></li>
                  <li><strong>Nolvadex (Tamoxifen Citrate)</strong></li>
                  <li><strong>HCG (Human Chorionic Gonadotropin)</strong></li>
                  <li><strong>Natural Testosterone Boosters</strong></li>
                </ul>
                <p className="text-gray-600 text-sm">These products help minimize side effects, protect your gains, and ensure a smooth recovery process.</p>
              </div>
            </div>
          </div>

        </div>

        <h2>Our Commitment to Your Success</h2>
        <p>At AnabolicHub.com, we’re more than just a supplier; we’re your partner in achieving your health and fitness goals. We prioritize:
        </p>
        <ul className="list-disc ps-4 mb-4">
          <li><strong>Education:</strong> Our blog and resources section provide in-depth information to help you make informed decisions about your health and performance.</li>
          <li><strong>Customer Satisfaction: </strong>Your feedback drives us to improve and expand our offerings.</li>
          <li><strong>Innovation: </strong>We continually update our inventory to include the latest advancements in performance-enhancing products.</li>
        </ul>

        <h3>Shop with Confidence</h3>
        <p>When you choose AnabolicHub.com, you’re choosing a trusted source for:</p>
        <ul className="list-disc ps-4 mb-4">
          <li>Genuine, high-quality products</li>
          <li>Secure payment options</li>
          <li>Fast and discreet shipping</li>
          <li>Exceptional customer support</li>
        </ul>

        <p>Take the first step toward your goals today. Browse our extensive catalog and discover why countless customers trust AnabolicHub.com for their performance and wellness needs.</p>

        <h3>Take the First Step Today</h3>
        <p>Your journey to peak performance and unparalleled wellness begins here. Browse our catalog, find the products that align with your goals, and let us support you every step of the way. Together, we can unlock your potential and achieve greatness.</p>
        <h4 className="!mb-6">Explore, Commit, Transform – Welcome to AnabolicHub.com!</h4>

        <h2>FAQ</h2>
        <h3>1. What is AnabolicHub.com?</h3>
        <p>AnabolicHub.com is a trusted online platform providing reliable information, resources, and high-quality products for bodybuilding, fitness, and health enthusiasts. We specialize in anabolic supplements, workout tips, and expert advice to help you achieve your fitness goals safely and effectively.</p>
        <h3>2. Are the products on AnabolicHub.com safe to use?</h3>
        <p>Yes, all products offered on AnabolicHub.com are sourced from reputable manufacturers and undergo strict quality control to ensure safety and efficacy. We also provide detailed usage guidelines and encourage consulting a healthcare professional before starting any new supplement regimen.</p>
        <h3>3. Do you offer worldwide shipping?</h3>
        <p>Yes, AnabolicHub.com provides worldwide shipping. Whether you're in the U.S., Europe, Asia, or elsewhere, we aim to deliver your products quickly and securely. Check our shipping policy for estimated delivery times and any regional restrictions.</p>
        <h3>4. Can beginners use the supplements available on AnabolicHub.com?</h3>
        <p>Absolutely. We offer a range of products suitable for all experience levels, including beginners. Each product comes with clear instructions, and our support team is available to help you choose the right supplements for your fitness journey.</p>
        <h3>5. How can I track my order?</h3>
        <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package's progress through our website or the courier's tracking system.</p>
        <h3>6. Does AnabolicHub.com offer a return policy?</h3>
        <p>Yes, we have a customer-friendly return policy. If you're unsatisfied with your purchase or received a damaged product, contact our support team within 30 days of delivery for a hassle-free resolution. Check our Returns and Refunds page for more details.</p>

      </section>
    </main>
  );
}
