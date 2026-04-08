import { Container } from '../ui/Container'

export function AboutDoctorSection() {
  return (
    <section className="py-24 bg-primary/5">
      <Container className="flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="w-full md:w-5/12 relative">
          <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl -z-10" />
          <img
            alt="Dr. Twinkle Jain"
            className="rounded-2xl shadow-sm w-full h-[600px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf6wJwFZ0qmcvvhP6LKkJdJrTxFu0YSkmNOxrvYcojpaReGf3-nPZcvtcWrmxIV9mWDy7dcfdYC8XVQZ-VZNHg-nygB5z3wZXhxL_krnCdfY2rF3adPT3vbHSULKKTMDlIpP3cM-L0Hfr6zXG77YSiwwgW3rROfYcjiemUNK9oQZhiwdljvCShQeja-CxHIRUD1-psAUHNxkLwnCvy50h7vrcWLV591dXaQOYKoH9Iag6DJDq93si8oFlwJF4Wm9u1PYpJqgn1TmE"
          />
        </div>

        <div className="w-full md:w-7/12">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Doctor</span>
          <h2 className="text-on-surface mb-6">Dr. Twinkle Jain</h2>
          <p className="text-on-surface-variant mb-10">
            Dr. Twinkle Jain is a dedicated dental surgeon with expertise in cosmetic and general dentistry. A graduate of
            Bharati Vidyapeeth Dental College, she brings a patient-centric approach to dentistry—ensuring every treatment is
            comfortable, well-explained, and tailored to individual needs. Her ability to handle patients calmly and her
            commitment to continuous learning make her a trusted choice for both local and NRI patients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: '🏆', title: '12+ Years', sub: 'Clinical Excellence' },
              { emoji: '🎓', title: 'BDS (Honors)', sub: 'Specialized Training' },
              { emoji: '🌍', title: '5k+ Patients', sub: 'Treated Internationally' },
              { emoji: '✨', title: 'Aesthetic Pro', sub: 'Smile Design Expert' },
            ].map((c) => (
              <div key={c.title} className="bg-surface-container-lowest p-6 rounded-xl flex items-center gap-4 shadow-sm">
                <span className="text-3xl" aria-hidden="true">
                  {c.emoji}
                </span>
                <div>
                  <h4 className="font-bold text-on-surface">{c.title}</h4>
                  <p className="text-on-surface-variant">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

