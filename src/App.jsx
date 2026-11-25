import { useState } from 'react'
import './App.css'

const divisions = [
  {
    number: '01',
    title: 'Fresh Fruits & Vegetables',
    description: 'Fresh produce sourced for wholesale, commercial and international markets.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800',
    products: [
      'Avocados', 'Mangoes', 'Oranges', 'Passion Fruits',
      'Pineapples', 'Bananas', 'Watermelons', 'Papayas',
      'Lemons', 'Apples', 'Grapes', 'French Beans',
      'Green Peas', 'Broccoli', 'Cabbages', 'Carrots',
      'Onions', 'Tomatoes', 'Potatoes', 'Capsicums',
      'Leafy Vegetables'
    ]
  },
  {
    number: '02',
    title: 'Cereals & Grains',
    description: 'Essential agricultural commodities for wholesalers, distributors and institutions.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800',
    products: [
      'Maize', 'Rice', 'Wheat', 'Beans',
      'Green Grams', 'Lentils', 'Sorghum',
      'Millet', 'Pigeon Peas', 'Other Grains'
    ]
  },
  {
    number: '03',
    title: 'Livestock & Dairy Products',
    description: 'Livestock trading and a range of dairy and milk-related products.',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800',
    products: [
      'Livestock Trading', 'Fresh Milk',
      'Powdered Milk', 'Butter', 'Cheese',
      'Other Dairy Products'
    ]
  },
  {
    number: '04',
    title: 'Agricultural Inputs & Feeds',
    description: 'Agricultural supplies and animal feeds for farming and agribusiness.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    products: [
      'Animal Feeds', 'Poultry Feeds',
      'Livestock Feeds', 'Crop Inputs',
      'Agricultural Supplies'
    ]
  },
  {
    number: '05',
    title: 'Packaged Foodstuffs & Dry Goods',
    description: 'Packaged food products, cooking essentials and commercial food staples.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
    products: [
      'Packaged Foods', 'Flour',
      'Cereals', 'Pulses', 'Legumes',
      'Sugar', 'Cooking Essentials',
      'Dry Food Products', 'Other Food Staples'
    ]
  },
  {
    number: '06',
    title: 'Bulk Food Supply for Institutions',
    description: 'Bulk food sourcing and supply for institutional and commercial buyers.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    products: [
      'School Food Supplies',
      'University Food Supplies',
      'Hospital Food Supplies',
      'Hotel & Restaurant Supplies',
      'NGO & Humanitarian Food Supply',
      'Government & Private Institutions'
    ]
  }
]

const services = [
  {
    number: '01',
    title: 'Import Services',
    description: 'Sourcing and importing agricultural commodities and food products through international trade relationships.'
  },
  {
    number: '02',
    title: 'Export Services',
    description: 'Connecting agricultural producers and suppliers with international buyers and markets.'
  },
  {
    number: '03',
    title: 'Wholesale Trading',
    description: 'Supplying agricultural commodities and food products to wholesalers, distributors and commercial buyers.'
  },
  {
    number: '04',
    title: 'Commodity Sourcing',
    description: 'Identifying and sourcing products according to buyer requirements, product specifications and quantities.'
  },
  {
    number: '05',
    title: 'Institutional Food Supply',
    description: 'Bulk food sourcing and supply arrangements for schools, hospitals, hotels and other institutions.'
  },
  {
    number: '06',
    title: 'Agricultural Supply',
    description: 'Sourcing agricultural inputs, animal feeds and related products for farming and agribusiness.'
  }
]

const qualityStandards = [
  {
    title: 'Product Sourcing',
    description: 'Prioritising reliable suppliers and appropriate product sourcing.'
  },
  {
    title: 'Quality Assessment',
    description: 'Giving attention to product condition, quality and buyer specifications.'
  },
  {
    title: 'Grading & Sorting',
    description: 'Considering appropriate grading and sorting requirements for products.'
  },
  {
    title: 'Packaging & Handling',
    description: 'Prioritising suitable packaging and careful product handling.'
  },
  {
    title: 'Transportation & Logistics',
    description: 'Considering transportation and logistics requirements throughout the supply process.'
  },
  {
    title: 'Food Safety & Compliance',
    description: 'Recognising applicable food safety requirements and regulatory compliance obligations.'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setFormStatus('')

    try {
      const response = await fetch('https://formspree.io/f/mdegyyan', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      })

      if (response.ok) {
        form.reset()
        setFormStatus(
          'Thank you! Your enquiry has been submitted successfully. Our team will get back to you.'
        )
      } else {
        setFormStatus(
          'Sorry, we could not submit your enquiry. Please try again or contact us directly by email or WhatsApp.'
        )
      }
    } catch {
      setFormStatus(
        'A connection error occurred. Please check your internet connection and try again, or contact us by email or WhatsApp.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="website">

      <div className="top-bar">
        <div className="container top-bar-content">
          <span>Nairobi, Kenya</span>
          <div>
            <a href="mailto:Info@rabbat.co.ke">Info@rabbat.co.ke</a>
            <span className="top-divider">|</span>
            <a href="tel:+254722970028">+254 722 970 028</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav-container">

          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-symbol">R</span>
            <span className="brand-name">
              RABBAT
              <small>TRADING & LOGISTICS LTD</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav className={menuOpen ? 'navigation active' : 'navigation'}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#divisions" onClick={closeMenu}>Products</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#trade" onClick={closeMenu}>International Trade</a>
            <a href="#quality" onClick={closeMenu}>Quality</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="nav-quote">
            Request a Quote
          </a>

        </div>
      </header>

      <main>

        {/* HERO */}

        <section className="hero-section" id="home">
          <div className="hero-overlay"></div>

          <div className="container hero-content">
            <span className="eyebrow">
              AGRICULTURAL COMMODITIES · IMPORT · EXPORT
            </span>

            <h1>
              Connecting Markets Through
              <span> Quality Agricultural Products.</span>
            </h1>

            <p>
              RABBAT TRADING & LOGISTICS LTD specialises in the import
              and export of agricultural commodities, fresh fruits and
              vegetables, cereals and grains, livestock and dairy products,
              agricultural inputs, packaged foodstuffs and bulk institutional
              food supplies.
            </p>

            <div className="hero-buttons">
              <a href="#divisions" className="btn btn-gold">
                Explore Our Products
              </a>

              <a href="#trade" className="btn btn-outline">
                International Trade
              </a>
            </div>

            <div className="hero-location">
              <span>KENYA</span>
              <span className="location-line"></span>
              <span>CONNECTING LOCAL & GLOBAL MARKETS</span>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="intro-strip">
          <div className="container intro-content">
            <div>
              <span className="section-label">OUR BUSINESS</span>
              <h2>Your Partner in Agricultural Commodities</h2>
            </div>

            <p>
              Connecting producers, suppliers, wholesalers, distributors
              and institutional buyers through agricultural and food trading.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}

        <section className="divisions-section section-padding" id="divisions">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">WHAT WE TRADE</span>
              <h2>Our Business Divisions</h2>
              <p>
                Explore our agricultural commodities and food product
                categories serving commercial and institutional markets.
              </p>
            </div>

            <div className="division-grid">
              {divisions.map((division) => (
                <article className="division-card" key={division.number}>
                  <div className="division-image">
                    <img
                      src={division.image}
                      alt={division.title}
                      loading="lazy"
                    />
                    <span className="division-number">
                      {division.number}
                    </span>
                  </div>

                  <div className="division-content">
                    <h3>{division.title}</h3>
                    <p>{division.description}</p>

                    <h4>Products & Supply Categories</h4>

                    <ul className="product-list">
                      {division.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>

                    <a href="#contact" className="text-link">
                      Request a Quotation <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ABOUT */}

        <section className="about-section section-padding" id="about">
          <div className="container about-content">

            <div>
              <span className="section-label">ABOUT RABBAT</span>
              <h2>Building Connections Across Agricultural Markets</h2>
            </div>

            <div>
              <p>
                RABBAT TRADING & LOGISTICS LTD is a Kenyan agricultural
                commodities and food trading company based in Nairobi.
              </p>

              <p>
                Our business focuses on sourcing, importing and exporting
                agricultural commodities, fresh produce and food products.
                We aim to connect reliable suppliers with commercial buyers,
                wholesalers, distributors and institutions in local and
                international markets.
              </p>

              <a href="#contact" className="text-link">
                Connect With Our Team →
              </a>
            </div>

          </div>
        </section>

        {/* SERVICES */}

        <section className="services-section section-padding" id="services">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">WHAT WE DO</span>
              <h2>Our Services</h2>
              <p>
                Agricultural commodity trading and supply services
                supporting commercial and institutional requirements.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="text-link">
                    Enquire Now →
                  </a>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* INTERNATIONAL TRADE */}

        <section className="trade-section section-padding" id="trade">
          <div className="container trade-content">
            <span className="section-label">BEYOND BORDERS</span>

            <h2>International Import & Export</h2>

            <p>
              Connecting agricultural producers with international buyers
              through commodity sourcing, importation, exportation and
              wholesale food trading.
            </p>

            <a href="#markets" className="btn btn-gold">
              Explore Our Global Markets
            </a>
          </div>
        </section>

        {/* GLOBAL MARKETS */}

        <section className="markets-section section-padding" id="markets">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">INTERNATIONAL OPPORTUNITIES</span>
              <h2>Our Global Markets</h2>
              <p>
                Identified export markets for selected Kenyan agricultural
                products and opportunities for wider international trade.
              </p>
            </div>

            <div className="markets-grid">
              <div>
                <h3>Avocados</h3>
                <p>Middle East · Asia · Europe</p>
              </div>

              <div>
                <h3>Mangoes & Oranges</h3>
                <p>South Africa · Egypt</p>
              </div>

              <div>
                <h3>Other Commodities</h3>
                <p>
                  Exploring wider international import and export opportunities.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* QUALITY */}

        <section className="quality-section section-padding" id="quality">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">OUR COMMITMENT</span>
              <h2>Quality & Supply Standards</h2>
              <p>
                Our approach prioritises appropriate sourcing, product
                quality, handling and supply requirements.
              </p>
            </div>

            <div className="quality-grid">
              {qualityStandards.map((item, index) => (
                <article className="quality-card" key={item.title}>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT AND ENQUIRY FORM */}

        <section className="contact-section section-padding" id="contact">
          <div className="container contact-content">

            <div>
              <span className="section-label">GET IN TOUCH</span>
              <h2>Let's Discuss Your Supply Requirements</h2>
              <p>
                Contact our team for agricultural commodities,
                food products, wholesale supply and international
                trading enquiries.
              </p>

              <div className="contact-details">
                <h3>RABBAT TRADING & LOGISTICS LTD</h3>

                <p>Nairobi, Kenya</p>

                <a href="mailto:Info@rabbat.co.ke">
                  Info@rabbat.co.ke
                </a>

                <a href="tel:+254722970028">
                  +254 722 970 028
                </a>

                <a
                  href="https://wa.me/254722970028"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                >
                  Contact Us on WhatsApp
                </a>

                <p>P.O. Box 1959, Standard Building - Nairobi.</p>
              </div>
            </div>

            <div className="enquiry-form-container">
              <h3>Send Us an Enquiry</h3>

              <p>
                Complete the form below with your contact details
                and supply requirements.
              </p>

              <form className="enquiry-form" onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Product Category *</label>
                  <select
                    id="category"
                    name="category"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Fresh Fruits & Vegetables">Fresh Fruits & Vegetables</option>
                    <option value="Cereals & Grains">Cereals & Grains</option>
                    <option value="Livestock & Dairy Products">Livestock & Dairy Products</option>
                    <option value="Agricultural Inputs & Feeds">Agricultural Inputs & Feeds</option>
                    <option value="Packaged Foodstuffs & Dry Goods">Packaged Foodstuffs & Dry Goods</option>
                    <option value="Bulk Food Supply for Institutions">Bulk Food Supply for Institutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="product">Specific Product *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    placeholder="Which product are you interested in?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Quantity Required *</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 10 tonnes, 500 boxes"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiryType">Enquiry Type *</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select enquiry type</option>
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Institutional Supply">Institutional Supply</option>
                  </select>
                </div>

                <div className="form-group form-message">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us more about your requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  disabled={isSubmitting}
                  style={{
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>

                {formStatus && (
                  <p className="form-notice" role="status" aria-live="polite">
                    {formStatus}
                  </p>
                )}

              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container footer-content">

          <div>
            <h3>RABBAT TRADING & LOGISTICS LTD</h3>
            <p>
              Your Trusted Partner in Agricultural Commodities,
              Food Trading, Import & Export.
            </p>
          </div>

          <p>
            © {new Date().getFullYear()} RABBAT TRADING & LOGISTICS LTD.
            All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  )
}

export default App