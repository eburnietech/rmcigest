import React from 'react'
import * as IoIcons from "react-icons/io5";
import "../../assets/css/home_style.css"

export const DashboardScreen = () => {
  return (
    <div className="homeDetails">
      <div className="homeRecentOrders">
        <div className="homeCardHeader">
            <h2>Versements récents</h2>
        </div>

        <table>
          <thead>
            <tr>
              <td>Conducteurs</td>
              <td>Véhicules</td>
              <td>Montant</td>
              <td>Statut</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Star Refrigerator</td>
              <td>$1200</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="customers">
        <div className="cards">
          <div className="cards-header">
            <h2>Manquement</h2>
          </div>

          <div className="cards-body">
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
            
            <div className="customer">
              <div className="info">
                  <img src={require("../../assets/imgs/customer01.jpg")} width="40px" height="40px" alt="" />
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO Excerpt</small>
                  </div>
              </div>
                <div className="contacts">
                  <span className="statut arret0 iconsBx"><IoIcons.IoKeySharp /></span>
                  <span className="statut stop1 iconsBx"><IoIcons.IoHourglassSharp /></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
