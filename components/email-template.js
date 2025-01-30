export const EmailTemplate = ({
  name,
  surname,
  phone,
  address,
  totalAmount,
  productQuantity,
  confirmationLink,
  products,
  Devise,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  }}>
    <h1 style={{
      color: '#333',
      textAlign: 'center',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px'
    }}>Nouvelle commande à confirmer!</h1>

    <div style={{ padding: '20px 0' }}>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <strong>Client:</strong> {name} {surname}<br />
        <strong>Téléphone:</strong> {phone}<br />
        <strong>Adresse:</strong> {address}<br />
      </p>

      <div style={{
        margin: '20px 0',
        borderRadius: '4px',
        border: '1px solid #eee'
      }}>
        <h2 style={{
          fontSize: '18px',
          margin: '10px',
          color: '#333'
        }}>Produits commandés:</h2>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f8f9fa'
            }}>
              <th style={{
                padding: '10px',
                textAlign: 'left',
                borderBottom: '1px solid #eee'
              }}>Produit</th>
              <th style={{
                padding: '10px',
                textAlign: 'right',
                borderBottom: '1px solid #eee'
              }}>Quantité</th>
              <th style={{
                padding: '10px',
                textAlign: 'right',
                borderBottom: '1px solid #eee'
              }}>Prix</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee'
                }}>{product.name}</td>
                <td style={{
                  padding: '10px',
                  textAlign: 'right',
                  borderBottom: '1px solid #eee'
                }}>{product.quantity}</td>
                <td style={{
                  padding: '10px',
                  textAlign: 'right',
                  borderBottom: '1px solid #eee'
                }}>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        textAlign: 'right',
        fontWeight: 'bold',
        marginTop: '20px'
      }}>
        <strong>Nombre total de produits:</strong> {productQuantity}<br />
        <strong>Montant total:</strong> {totalAmount} {Devise}
      </p>
    </div>

    <div style={{
      textAlign: 'center',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '2px solid #eee'
    }}>
      <a href={confirmationLink}
        style={{
          backgroundColor: '#4CAF50',
          color: '#ffffff',
          padding: '12px 24px',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block'
        }}>
        Confirmer la commande
      </a>
    </div>
  </div>
);
