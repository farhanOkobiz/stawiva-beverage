import { motion } from "framer-motion";
import Containar from "../components/containar/Containar";
import P1 from "../assets/policy/P1.png";



const textVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
};

function Policy() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-white perspective-1000">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${P1})` }}
          initial={{ z: -200, opacity: 0, scale: 1.2 }}
          animate={{
            z: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
        />
        {/* Dark Overlay */}
        <motion.div
          className="relative z-10 text-center px-4 p-6 rounded"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
          }}
        >
        </motion.div>
      </div>

      {/* Message Section */}
      <Containar>
        <div className="my-20">
          {/* Right Text */}
          <motion.div
            className=" w-full space-y-10  leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-3xl font-bold  mb-6">Our Policy</h3>

            {/* Introduction */}
            <section>
              <h4 className="text-xl font-semibold mb-2">Introduction</h4>
              <p>
                Stamina+ Beverage Limited is committed to the highest standards
                of quality, safety, transparency, and ethical conduct. This
                Policy page outlines our commitments, practices, and procedures
                across product quality & safety, environment, employment,
                procurement, data protection, and corporate governance.
              </p>
            </section>

            {/* Product Quality & Safety Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Product Quality & Safety Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Quality Commitment:</strong> We ensure all products
                  meet stringent internal quality standards and applicable
                  national & international regulations.
                </li>
                <li>
                  <strong>Food Safety Systems:</strong> We operate certified
                  food safety management systems (e.g., HACCP / ISO 22000) and
                  follow Good Manufacturing Practices (GMP).
                </li>
                <li>
                  <strong>Ingredient Control & Traceability:</strong> All raw
                  materials are traced from approved suppliers; batch-level
                  traceability enables rapid action in case of quality issues.
                </li>
                <li>
                  <strong>Testing & Monitoring:</strong> Routine laboratory
                  testing (microbiological, chemical, and sensory) is carried
                  out for every production batch.
                </li>
                <li>
                  <strong>Recall & Incident Response:</strong> We maintain a
                  documented recall procedure, immediate notification protocols,
                  and corrective action plans to protect consumers.
                </li>
                <li>
                  <strong>Labeling & Compliance:</strong> Product labels include
                  accurate ingredient lists, allergen declarations, nutritional
                  information, manufacturing and expiry dates, storage
                  instructions, and regulatory marks as required.
                </li>
              </ul>
            </section>

            {/* Environmental Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Environmental Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sustainable Operations:</strong> We implement
                  energy-efficient technologies, water conservation measures,
                  and responsible waste management to minimize environmental
                  footprint.
                </li>
                <li>
                  <strong>Packaging & Circularity:</strong> Packaging is chosen
                  with recyclability and waste reduction in mind; we actively
                  explore lightweighting and recyclable materials.
                </li>
                <li>
                  <strong>Compliance & Improvement:</strong> We comply with
                  applicable environmental laws and pursue continuous
                  improvement through targets for emissions, water use, and
                  waste reduction.
                </li>
                <li>
                  <strong>Community & Biodiversity:</strong> We support
                  initiatives that protect local ecosystems and encourage
                  supplier practices that respect biodiversity.
                </li>
              </ul>
            </section>

            {/* Occupational Health & Safety Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Occupational Health & Safety Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Safe Workplace:</strong> We provide a safe, secure
                  working environment with regular risk assessments, safety
                  training, and PPE for all relevant roles.
                </li>
                <li>
                  <strong>Health Programs:</strong> Periodic health checks and
                  wellness programs are provided to employees.
                </li>
                <li>
                  <strong>Emergency Preparedness:</strong> Fire safety,
                  first-aid, evacuation drills, and incident-reporting systems
                  are in place.
                </li>
                <li>
                  <strong>Zero Tolerance:</strong> We enforce zero tolerance for
                  behavior or practices that endanger colleagues or compromise
                  safety standards.
                </li>
              </ul>
            </section>

            {/* Employment & Labor Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Employment & Labor Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Fair Employment:</strong> We are committed to fair
                  wages, lawful working hours, and respectful treatment for all
                  employees.
                </li>
                <li>
                  <strong>No Child or Forced Labor:</strong> We strictly
                  prohibit child labor, forced labor, and any exploitative
                  practices.
                </li>
                <li>
                  <strong>Diversity & Inclusion:</strong> We promote equal
                  opportunity, respect diversity, and maintain an inclusive
                  workplace culture.
                </li>
                <li>
                  <strong>Training & Development:</strong> Continuous learning,
                  skill development and career progression are supported through
                  structured programs.
                </li>
              </ul>
            </section>

            {/* Supplier & Procurement Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Supplier & Procurement Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ethical Sourcing:</strong> Suppliers are selected
                  based on quality, compliance, ethical standards, and
                  environmental performance.
                </li>
                <li>
                  <strong>Supplier Code of Conduct:</strong> All suppliers must
                  adhere to our code covering labor rights, environmental
                  responsibility, anti-bribery, and product safety.
                </li>
                <li>
                  <strong>Audits & Assessments:</strong> Regular supplier
                  assessments and audits ensure ongoing compliance and
                  improvement.
                </li>
              </ul>
            </section>

            {/* Data Protection & Privacy Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Data Protection & Privacy Policy (Customers & Employees)
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data Use:</strong> We collect, process, and
                  store personal data only for legitimate business purposes and
                  in accordance with applicable data protection laws.
                </li>
                <li>
                  <strong>Security Measures:</strong> Technical and
                  organizational safeguards protect personal data against
                  unauthorized access, disclosure, alteration, and loss.
                </li>
                <li>
                  <strong>Retention & Rights:</strong> Personal data is retained
                  only as long as necessary; data subjects may request access,
                  correction, or deletion in line with law.
                </li>
                <li>
                  <strong>Third-Party Processors:</strong> Any third parties
                  processing data for us must meet our security and
                  confidentiality standards.
                </li>
              </ul>
            </section>

            {/* Anti-Corruption & Business Ethics Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Anti-Corruption & Business Ethics Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Zero Tolerance:</strong> We have zero tolerance for
                  bribery, corruption, or unethical business conduct.
                </li>
                <li>
                  <strong>Gifts & Hospitality:</strong> Accepting or offering
                  gifts that influence business decisions is prohibited except
                  under strictly defined, recorded limits.
                </li>
                <li>
                  <strong>Whistleblower Protection:</strong> Confidential
                  channels exist for reporting misconduct; whistleblowers are
                  protected from retaliation.
                </li>
              </ul>
            </section>

            {/* Media, Communications & Social Media Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Media, Communications & Social Media Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Official Spokespersons:</strong> Only authorised
                  personnel may speak on behalf of Stamina+.
                </li>
                <li>
                  <strong>Consistent Messaging:</strong> All public
                  announcements should be accurate, non-misleading, and reflect
                  company values.
                </li>
                <li>
                  <strong>Social Media Use:</strong> Employees should follow
                  internal guidelines when mentioning the company on personal
                  channels.
                </li>
              </ul>
            </section>

            {/* Export Compliance & Trade Policy */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Export Compliance & Trade Policy
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Regulatory Compliance:</strong> We comply with
                  export/import laws, customs regulations, labeling
                  requirements, and destination-specific standards while
                  preparing for international distribution.
                </li>
                <li>
                  <strong>Documentation & Certificates:</strong> Necessary
                  export documentation, product certifications, and certificates
                  of origin will be maintained for cross-border shipments.
                </li>
              </ul>
            </section>

            {/* Consumer Complaints & Contact */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Consumer Complaints & Contact
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Customer Support:</strong> We maintain an accessible
                  customer service channel for product inquiries, complaints,
                  and feedback.
                </li>
                <li>
                  <strong>Complaint Resolution:</strong> All complaints are
                  logged, investigated, and resolved within a defined SLA;
                  corrective actions are recorded.
                </li>
                <li>
                  <strong>Contact:</strong> [Insert customer service email /
                  phone / web form link]
                </li>
              </ul>
            </section>

            {/* Review & Continuous Improvement */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Review & Continuous Improvement
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Policy Review:</strong> This Policy is reviewed
                  periodically and updated to reflect changes in law, industry
                  standards, and company strategy.
                </li>
                <li>
                  <strong>Performance Metrics:</strong> We track KPIs related to
                  quality, safety, environmental impact, employee welfare, and
                  supplier compliance to drive improvement.
                </li>
              </ul>
            </section>

            {/* Governance & Responsibility */}
            <section>
              <h4 className="text-xl font-semibold mb-2">
                Governance & Responsibility
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Leadership Accountability:</strong> Senior management
                  is accountable for policy implementation and resourcing.
                </li>
                <li>
                  <strong>Functional Owners:</strong> Responsibility for each
                  policy area (Quality, Environment, HR, Procurement, Legal) is
                  assigned to designated managers.
                </li>
              </ul>
            </section>

            {/* Document Control */}
            <section>
              <h4 className="text-xl font-semibold mb-2">Document Control</h4>
              <p>
                Prepared by: <strong>Stamina+ Beverage Limited</strong> |
                Version: 1.0 | Effective date: [Insert date] | Next review:
                [Insert date]
              </p>
            </section>
          </motion.div>
        </div>
      </Containar>
    </div>
  );
}

export default Policy;
