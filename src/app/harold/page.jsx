'use client'
import Image from 'next/image';

export default function PerfilEstudiante() {
  return (
    <div style={styles.container}>
      {/* Título principal */}
      <header style={styles.mainHeader}>
        <h1 style={styles.mainTitle}>AcademicoMaxUNC</h1>
      </header>

      {/* Encabezado con el degradado y la barra de navegación */}
      <div style={styles.header}>
        <div style={styles.menuIconContainer}>
          <div style={styles.menuIcon}>
            <div style={styles.menuLine}></div>
            <div style={styles.menuLine}></div>
            <div style={styles.menuLine}></div>
          </div>
        </div>
        <div style={styles.profile}>
          <Image
            src="https://intranet.upn.edu.pe/wsfoto/Foto/THIwcmF0cmNyeXhmRDBSQ2QyOFFpZz09/Student"
            alt="Foto de perfil"
            width={40}
            height={40}
            style={styles.profileImage}
          />
        </div>
      </div>

      {/* Título de Sesiones de Clase */}
      <section style={styles.sectionTitle}>
        <h2 style={styles.subtitle}>Estudiante</h2>
        <h3 style={styles.sessionTitle}>Sesiones de Clase - CICLO 2024 I</h3>
        <div style={styles.buttonContainer}>
          <button style={styles.periodButton}>
            Seleccione Periodo <span style={styles.dropdownArrow}>▼</span>
          </button>
        </div>
      </section>

      {/* Sección del estudiante */}
      <section style={styles.studentSection}>
        <div style={styles.profileContainer}>
          <Image
            src="https://intranet.upn.edu.pe/wsfoto/Foto/THIwcmF0cmNyeXhmRDBSQ2QyOFFpZz09/Student"
            alt="Bautista Ruiz Cristhian Alexander"
            width={100}
            height={100}
            style={styles.profilePicture}
          />
          <h3 style={styles.studentName}>Bautista Azañero Harold Efraín </h3>
          <p style={styles.studentInfo}>INGENIERÍA DE SISTEMAS</p>

          <div style={styles.infoSection}>
            <div style={styles.infoRow}>
              <p style={styles.label}>Código:</p>
              <p style={styles.value}>2021130045</p>
            </div>
            <div style={styles.infoRow}>
              <p style={styles.label}>Email:</p>
              <p style={styles.value}>hbautistaa21_2@unc.edu.pe</p>
            </div>
            <div style={styles.infoRow}>
              <p style={styles.label}>Modalidad Estudios:</p>
              <p style={styles.valueBlue}>PRESENCIAL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Activos */}
      <section style={styles.coursesSection}>
        <h3 style={styles.coursesTitle}>Mis Cursos (Activos)</h3>
        <ul style={styles.coursesList}>
          {[
            "DESARROLLO DE HABILIDADES DIRECTIVAS",
            "GESTIÓN DE CONOCIMIENTO",
            "GESTIÓN DE TECNOLOGÍAS DE INFORMACIÓN",
            "INGLÉS STEM I",
            "REDES III",
            "SISTEMAS EMPRESARIALES",
            "TESIS I"
          ].map((curso, index) => (
            <li key={index} style={styles.courseItem}>
              <div>
                <p style={styles.courseName}>{curso}</p>
                <p style={styles.courseCode}>Código: 110268 Grupo:A1</p>
              </div>
              <button style={styles.viewButton}>Ver</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainHeader: {
    backgroundColor: '#003366',
    color: 'white',
    width: '100%',
    padding: '10px',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  header: {
    background: 'linear-gradient(90deg, #003366 0%, #006699 100%)',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  menuIcon: {
    width: '25px',
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  menuLine: {
    width: '100%',
    height: '3px',
    backgroundColor: '#fff',
    borderRadius: '2px',
  },
  profile: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  sectionTitle: {
    marginTop: '10px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#003366',
  },
  sessionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#003366',
    marginTop: '5px',
  },
  buttonContainer: {
    marginTop: '10px',
    marginLeft: '-50px'
  },
  periodButton: {
    backgroundColor: '#ffc107',
    border: 'none',
    padding: '8px 12px',
    fontSize: '14px',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  dropdownArrow: {
    marginLeft: '5px',
  },
  studentSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profilePicture: {
    borderRadius: '50%',
    border: '4px solid #ddd',
    marginBottom: '10px',
  },
  studentName: {
    fontSize: '18px',
    fontWeight: '500',
    margin: '10px 0',
  },
  studentInfo: {
    color: '#666',
    fontSize: '14px',
  },
  infoSection: {
    textAlign: 'left',
    marginTop: '20px',
    borderTop: '1px solid #ddd',
    paddingTop: '10px',
    width: '100%',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '10px',
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  value: {
    fontSize: '14px',
    color: '#0e5e9a',
    fontWeight:'700'
  },
  valueBlue: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#003366',
  },
  coursesSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
  },
  coursesTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  coursesList: {
    listStyle: 'none',
    padding: 0,
    fontSize:'12px',
    borderRadius:'1em'
  },
  courseItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
  },
  courseName: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#006600',
  },
  courseCode: {
    color: '#666',
    fontSize: '12px',
  },
  viewButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
