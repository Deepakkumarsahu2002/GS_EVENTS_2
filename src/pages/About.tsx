import { Link } from 'react-router-dom';
import { Award, Users, UtensilsCrossed, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: Award, title: 'Excellence', desc: 'We never compromise on quality. Every event is executed to perfection, down to the smallest detail.' },
  { icon: Users, title: 'Client-First', desc: 'Your vision is our blueprint. We listen, understand, and deliver exactly what you dreamed of.' },
  { icon: UtensilsCrossed, title: 'Culinary Mastery', desc: 'Our catering is our pride. Authentic flavors, fresh ingredients, and presentation that wows.' },
  { icon: Calendar, title: 'Reliability', desc: '15+ years of flawless execution. We arrive on time, every time, and deliver on every promise.' },
];

const milestones = [
  { year: '2009', event: 'GS Events founded with a small team and big dreams' },
  { year: '2013', event: 'Expanded to full-service catering across Karnataka' },
  { year: '2017', event: 'Crossed 200+ successful events milestone' },
  { year: '2021', event: 'Launched premium decor and theme services' },
  { year: '2024', event: '500+ events delivered and growing stronger' },
];

const highlights = [
  'Multi-cuisine catering — North Indian, South Indian, Chinese, Continental',
  'Custom theme decorations for any event type',
  'Dedicated event coordinator for every booking',
  'On-time delivery and setup, guaranteed',
  'Flexible packages to fit any budget',
  'Trusted by 500+ families across India',
];

const founders = [
  {
    name: 'Ganesh Sharma',
    role: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/38889922/pexels-photo-38889922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'With over 20 years in the hospitality industry, Ganesh started GS Events with a passion for bringing people together through food and celebration. His attention to detail and commitment to quality have shaped the company into what it is today.',
  },
  {
    name: 'Sunita Sharma',
    role: 'Co-Founder & Head of Catering',
    image: 'https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Sunita leads our catering division with a deep love for authentic Indian cuisine. Her recipes, perfected over decades, are the reason our catering is the strongest part of our business. Every menu is personally curated by her.',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Event Manager',
    image: 'https://images.pexels.com/photos/7580937/pexels-photo-7580937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Anita Reddy',
    role: 'Lead Decorator',
    image: 'https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Vikram Singh',
    role: 'Head Chef',
    image: 'https://images.pexels.com/photos/16749990/pexels-photo-16749990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Deepa Nair',
    role: 'Client Relations Manager',
    image: 'https://images.pexels.com/photos/39308263/pexels-photo-39308263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-900 via-primary-950 to-neutral-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl" />
        <div className="container-max relative px-4 sm:px-6 md:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-400">About Us</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Our Story
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
            For over 15 years, GS Events and Catering has been turning ordinary moments into extraordinary memories.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Who We Are</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                A Legacy of Celebrations
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  GS Events and Catering began in 2009 with a simple mission: to make every celebration unforgettable. What started as a small family-run catering service has grown into one of the most trusted event management companies in India.
                </p>
                <p>
                  Our journey has been built on word-of-mouth recommendations from happy clients. We believe that great food and beautiful decor speak for themselves — and our 500+ events are proof of that philosophy.
                </p>
                <p>
                  While we've grown, we haven't lost our personal touch. Every event, big or small, gets the same attention to detail and passion that we started with. That's the GS promise.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Work With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/33914530/pexels-photo-33914530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Wedding hall"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/17294719/pexels-photo-17294719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Catering spread"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/31002035/pexels-photo-31002035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Haldi ceremony"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover -mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/29486068/pexels-photo-29486068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Buffet"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 card-hover text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30 mx-auto mb-5">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              Milestones We're Proud Of
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-10 last:pb-0 relative">
                {i < milestones.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-neutral-200" />
                )}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold text-sm shadow-lg shadow-primary-500/30 z-10">
                  {m.year}
                </div>
                <div className="pt-2">
                  <p className="text-neutral-700 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Our Leadership</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              Meet the Founders
            </h2>
            <p className="mt-4 text-neutral-600">
              The visionaries behind GS Events and Catering, whose passion and dedication built this company from the ground up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100 card-hover">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-sm text-primary-300">{founder.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-neutral-600 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Our People</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
              The Team Behind Every Event
            </h2>
            <p className="mt-4 text-neutral-600">
              Our dedicated team of professionals works tirelessly to ensure every celebration is flawless from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm bg-neutral-100 card-hover">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-xs text-primary-300 mt-0.5">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/19439930/pexels-photo-19439930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Event venue"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
                <div className="font-serif text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Events Delivered</div>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-600">Why Choose Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                The GS Advantage
              </h2>
              <ul className="space-y-4">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-success-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
