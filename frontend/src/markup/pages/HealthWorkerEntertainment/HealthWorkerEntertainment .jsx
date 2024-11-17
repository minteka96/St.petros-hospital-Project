/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './HealthWorkerEntertainment.module.css';

const HealthWorkerINfo = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Health Worker information Referarnce page</h2>
      <p className={classes.description}>
        Access articles, videos, and resources to keep you informed and motivated.
      </p>

      {/* Articles Section */}
      <section>
        <h3 className={classes.sectionTitle}>National Guidelines and Treatment Protocols</h3>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              World Health Organization (WHO) - Global Health Guidelines
            </a>
            <p className={classes.linkDescription}>
              Provides global health guidelines, research publications, and treatment protocols for a variety of diseases, including emerging diseases and pandemic guidelines.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Centers for Disease Control and Prevention (CDC) - Disease and Treatment Guidelines
            </a>
            <p className={classes.linkDescription}>
              Offers treatment guidelines, disease prevention protocols, and health advisories for infectious diseases and emergency responses.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              National Institutes of Health (NIH) – Clinical Guidelines
            </a>
            <p className={classes.linkDescription}>
              Provides clinical guidelines and extensive research on diseases, diagnostics, and treatment advancements.
            </p>
          </li>
        </ul>
      </section>

      {/* Medical Journals Section */}
      <section>
        <h3 className={classes.sectionTitle}>Medical Journals and Research Databases</h3>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              PubMed
            </a>
            <p className={classes.linkDescription}>
              A leading database for biomedical literature, including research articles, clinical trials, and evidence-based resources.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.uptodate.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              UpToDate (Subscription Required)
            </a>
            <p className={classes.linkDescription}>
              Offers evidence-based information on diseases, treatment options, and diagnostics to support clinical decisions.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.cochranelibrary.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Cochrane Library
            </a>
            <p className={classes.linkDescription}>
              Systematic reviews of healthcare interventions, providing evidence-based insights for informed decisions.
            </p>
          </li>
        </ul>
      </section>

      {/* Drug Information Section */}
      <section>
        <h3 className={classes.sectionTitle}>Drug Information and Interaction Checkers</h3>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <a href="https://www.medscape.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Medscape
            </a>
            <p className={classes.linkDescription}>
              Provides drug information, disease updates, and professional news with drug interaction checkers.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.drugs.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Drugs.com
            </a>
            <p className={classes.linkDescription}>
              Features a drug interaction checker, pill identifier, and extensive drug information for safe prescribing.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.micromedexsolutions.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Micromedex
            </a>
            <p className={classes.linkDescription}>
              Widely used in hospitals for medication management, including drug information and interaction checkers.
            </p>
          </li>
        </ul>
      </section>

      {/* Diagnostic Tools Section */}
      <section>
        <h3 className={classes.sectionTitle}>Diagnostic Tools and Disease References</h3>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <a href="https://bestpractice.bmj.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              BMJ Best Practice
            </a>
            <p className={classes.linkDescription}>
              Clinical decision support tool with step-by-step diagnostic and treatment guidance across multiple specialties.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.visualdx.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              VisualDx
            </a>
            <p className={classes.linkDescription}>
              Provides visual aids and extensive image databases to assist with differential diagnosis, especially useful in dermatology.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://radiopaedia.org/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Radiopaedia
            </a>
            <p className={classes.linkDescription}>
              A radiology resource with cases, images, and articles to support diagnostic decisions based on imaging.
            </p>
          </li>
        </ul>
      </section>

      {/* Telehealth Section */}
      <section>
        <h3 className={classes.sectionTitle}>Telehealth and Virtual Support</h3>
        <ul className={classes.linkList}>
          <li className={classes.linkListItem}>
            <a href="https://www.doximity.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              Doximity
            </a>
            <p className={classes.linkDescription}>
              A network for healthcare professionals with virtual visits, secure messaging, and video call support.
            </p>
          </li>
          <li className={classes.linkListItem}>
            <a href="https://www.americantelemed.org/" target="_blank" rel="noopener noreferrer" className={classes.link}>
              American Telemedicine Association
            </a>
            <p className={classes.linkDescription}>
              Provides guidelines and best practices for telemedicine to ensure quality standards in virtual care.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HealthWorkerINfo;
