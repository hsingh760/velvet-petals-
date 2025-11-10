import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function VelvetPetals() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! Thank you for contacting Velvet Petals.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center py-12">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide text-rose-600"
          style={{ fontFamily: 'Great Vibes, cursive' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Velvet Petals
        </motion.h1>
        <p className="mt-2 text-lg text-gray-600">Serving the Greater Toronto Area and Durham Region</p>
      </header>

      {/* Products Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {["Roses", "Tulips", "Lilies", "Bouquets", "Event Arrangements", "Gift Boxes"].map((product) => (
          <Card key={product} className="shadow-md hover:shadow-xl transition rounded-2xl">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold text-rose-700">{product}</h3>
              <p className="text-gray-500 mt-2">Available for order — inquire below for pricing</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Inquiry Form */}
      <section className="bg-white bg-opacity-60 backdrop-blur-md py-12 px-6 rounded-t-3xl shadow-inner">
        <h2 className="text-3xl text-center text-rose-700 font-semibold mb-6">Send Us an Inquiry</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Describe what you’re looking for..." value={form.message} onChange={handleChange} rows={5} required />
          <Button type="submit" className="w-full bg-rose-600 text-white hover:bg-rose-700 rounded-xl">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-700 text-sm">
        <p>📞 437-663-2163 | ✉️ velvetpetalbouquet@gmail.com</p>
        <p className="mt-2">© {new Date().getFullYear()} Velvet Petals — All Rights Reserved</p>
      </footer>
    </div>
  );
}
