import React from 'react'

const GreetingCard = () => {
    const styles = {
        profileCard: {
            background: 'linear-gradient(180deg, #4c0099, #660066)',
            borderRadius: '1rem',
            padding: '1.5rem',
            color: 'white',
            width: '300px',
            position: 'relative',
        },
        profileImage: {
            width: '100px',
            position: 'absolute',
            
            top: '1rem',
            left: '1rem',
        },
        gemIcon: {
            backgroundColor: '#ff69b4',
            padding: '0.5rem',
            borderRadius: '50%',
            position: 'absolute',
            top: '1rem',
            right: '1rem',
        },
        roundedFull: {
            borderRadius: '50%',
        }
    };
  return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient">

  
    <div style={styles.profileCard}>
    <div style={styles.profileImage}>
        <img src="https://placehold.co/100x50" alt="Curso de Figma logo" style={styles.profileImage}/>
    </div>
    <div style={styles.gemIcon}>
        <i className="fas fa-gem text-white"></i>
    </div>
    <div className="mt-5">
        <img src="https://placehold.co/150x150" alt="Profile picture of Rodrigo Trindade" style={{ ...styles.roundedFull, width: '130px', height: '130px' }} />
        <h1 className="h4">Rodrigo Trindade</h1>
                        <p className="text-info">Product Designer</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="fab fa-instagram"></i>
                            <p className="ms-2">@rodrigotrinade</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="fas fa-map-marker-alt"></i>
                            <p className="ms-2">Brasil</p>
                        </div>
                        <div className="mt-3">
                            <p>Status: <span className="text-info">Cursando</span></p>
                            <p>Turma: <span className="text-info">#0001</span></p>
                        </div>
                        <div className="mt-4 d-flex justify-content-center gap-2">
                            <span className="badge bg-dark rounded-pill">#cursodefigma</span>
                            <span className="badge bg-dark rounded-pill">#feuxdesign</span>
                        </div>
    </div>
</div>
</div>
  )
}

export default GreetingCard