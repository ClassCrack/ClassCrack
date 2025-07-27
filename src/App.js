import React from 'react';
import './App.css';
import qr from './assets/qr.png';
import logo from './assets/logo.png';

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-bold">ClassCrack</h1>
          <p className="text-sm text-gray-300">No Junk, Just Juicy Fundamentals for Classes 9–12</p>
        </div>
        <img src={logo} alt="Logo" className="h-16 w-16 rounded-full object-cover" />
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gray-950">
        <h2 className="text-4xl font-extrabold mb-4">Learn Fast. Score More.</h2>
        <p className="text-lg text-gray-400 mb-8">Chapter-wise concept notes, revision sets & full subject packs crafted for Classes 9–12</p>
        <div className="space-x-4">
          <button onClick={() => scrollTo('pricing')} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded">View Pricing</button>
          <button onClick={() => scrollTo('order')} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded">Scan to Pay</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-gray-900 text-center" id="features">
        <h3 className="text-3xl font-bold mb-6">What You Get</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold">Chapter-Wise Notes</h4>
            <p className="text-gray-400 mt-2">Crisp explanations, formulas, and examples.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold">Flashcards</h4>
            <p className="text-gray-400 mt-2">Perfect for quick revision and last-minute prep.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold">Full Subject Packs</h4>
            <p className="text-gray-400 mt-2">Complete syllabus coverage with one-time access.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-xl font-semibold">Custom Notes</h4>
            <p className="text-gray-400 mt-2">We craft exactly what you need on request.</p>
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-12 px-6 bg-gray-950 text-center" id="subjects">
        <h3 className="text-3xl font-bold mb-6">Subjects Covered</h3>
        <p className="text-gray-300 mb-4">We offer comprehensive notes for the following classes and subjects.</p>
        <div className="max-w-3xl mx-auto text-left text-gray-300 space-y-4">
          <div>
            <h4 className="text-xl font-semibold">🎓 CBSE/ICSE - Classes 9, 10, 11, 12</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Mathematics</li>
              <li>Social Science (History, Geography, Civics, Economics)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">🎓 State Board - Classes 11 & 12 (Science)</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Mathematics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-6 text-center bg-gray-900" id="pricing">
        <h3 className="text-3xl font-bold mb-6">Pricing</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            ['Chapter Notes', '₹39', 'Complete notes for a single chapter'],
            ['Flashcard Set', '₹159', 'Quick revision cards for entire subject'],
            ['Full Subject Pack', '₹249', 'All chapters for one subject'],
            ['Custom Notes', '₹299–499', 'Based on complexity & requirement']
          ].map(([title, price, desc]) => (
            <div key={title} className="bg-gray-800 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold">{title}</h4>
              <p className="text-2xl font-bold mt-2">{price}</p>
              <p className="text-gray-400 mt-2">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-4 text-sm">Custom pricing is shared after Google Form submission.</p>
      </section>

      {/* Sample Notes Link */}
      <section className="text-center bg-gray-950 py-8">
        <a href="https://drive.google.com/file/d/1QNl31B97sRV-cUIzlC5vjulQvZzyRdna/view?usp=sharing" target="_blank" rel="noopener noreferrer"
           className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
          View Sample Notes
        </a>
      </section>

      {/* Scan to Pay */}
      <section className="py-12 px-6 text-center bg-gray-900" id="order">
        <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
        <p className="text-gray-400 mb-6">Make your payment and fill out our Google Form to get started.</p>
        <h4 className="text-xl font-semibold mb-2">Payment Options</h4>
        <p className="text-gray-400 mb-4">Scan the QR code below to make your payment. For custom notes, submit the form first and we'll send pricing to your WhatsApp within 12 hours.</p>
        <img src={qr} alt="QR Code" className="mx-auto w-48 h-48 rounded-lg border border-gray-600 shadow" />
        <p className="text-sm text-gray-400 mt-2">Scan with any UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
        <p className="text-sm text-gray-500 mt-2">Take a screenshot of your payment for the next step</p>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Order Form</h4>
          <a href="https://forms.gle/w93cPQZ4igXqYaZx9" target="_blank" rel="noopener noreferrer"
             className="mt-2 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold shadow">
            Fill Order Form
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">Note: Custom notes pricing will be shared to WhatsApp within 12 hours of form submission.</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center bg-gray-950">
        <h3 className="text-3xl font-bold mb-6">What Students Say</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <p>"ClassCrack notes helped me complete the syllabus in half the time!"</p>
            <p className="text-sm text-gray-400 mt-2">— Priya, Class 10</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <p>"Clear, concise and no extra fluff. Just what I needed."</p>
            <p className="text-sm text-gray-400 mt-2">— Aman, Class 12</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 bg-gray-900 text-center" id="faq">
        <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto text-left space-y-6 text-gray-300">
          <div>
            <h4 className="font-semibold">How long does it take to receive my notes?</h4>
            <p className="text-gray-400">You’ll receive your notes within 36–48 hours (standard delivery).</p>
          </div>
          <div>
            <h4 className="font-semibold">What format will I receive the notes in?</h4>
            <p className="text-gray-400">Notes are shared as PDF files that you can read, print, or annotate.</p>
          </div>
          <div>
            <h4 className="font-semibold">What payment methods do you accept?</h4>
            <p className="text-gray-400">Payments are accepted via UPI (Google Pay, PhonePe, Paytm, etc.).</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-400 mb-4">Have questions or need assistance? Reach out to us!</p>
        <p className="text-gray-400">📧 Email: classcrack26@gmail.com</p>
        <p className="text-gray-400">📱 WhatsApp: +91 7873868628</p>
        <a
          href="https://wa.me/917873868628"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold"
        >
          Chat with Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ClassCrack. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
