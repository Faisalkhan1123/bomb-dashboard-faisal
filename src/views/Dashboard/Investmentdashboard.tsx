import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Page from '../../components/Page';
import {  Switch} from 'react-router-dom';
//import { Grid, Box } from '@material-ui/core';
//import ReactDOM from 'react-dom';
import styles from './investment.module.scss';

import { Card, CardContent,  } from '@material-ui/core';

import HomeImage from '../../assets/img/background.jpg';

// import { Helmet } from 'react-helmet';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
// const style1 = {
//   color: 'white',
// };
const InvestmentDashboard: React.FC = () => {
  return (
    <Switch>
      <Page>
        <BackgroundImage />
        <div>
      <Card className={styles['card']}>
        <CardContent>
          <div className={styles['card-heading']}>Bomb Finanace Summary</div>
          <hr />
          <div className={styles['card-content']}>
            <div>
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>
                  Current Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>
                  Total Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>Price</div>
              </div>
              <hr className={styles['card-content-hr-1']} />
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>
                  Current Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>
                  Total Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>Price</div>
              </div>
              <hr className={styles['card-content-hr-2']} />
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>
                  Current Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>
                  Total Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>Price</div>
              </div>
              <hr className={styles['card-content-hr-2']} />
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>
                  Current Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>
                  Total Supply
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>Price</div>
              </div>
              <hr className={styles['card-content-hr-2']} />
            </div>
            <div className={styles['card-content-2']}>
              <div>A</div>
              <hr />
              <div>B</div>
              <hr />
              <div>C</div>
              <hr />
              <div>D</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <br />
      <Card className={styles['card']}>
        <CardContent>
          <div className={styles['card-4']}>Bomb Farms</div>
          <div className={styles['card-content-4']}>
            Stake your LP tokens in our farms to start earning $BSHARE
          </div>
          <div className={styles['bomb-btcb-content']}>
            <div className={styles['bomb-btcb']}>BOMB BTCB</div>
            <div className={styles['recommended-back']}>
              <div className={styles['recommended']}>Recommended</div>
            </div>
          </div>
          <hr />
          <div className={styles['card-content']}>
            <div>
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a-4']}>
                  Daily Returns
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a-4-b']}>
                  Your Stake
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a-4-b']}>Earned</div>
              </div>
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>2%</div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>6.0000</div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>1660.4413</div>
              </div>
            </div>
            <div className={styles['card-content-2']}>
              <div className={styles['deposit']}>Deposit</div>
              <div className={styles['withdraw']}>Withdraw</div>
              <div className={styles['claim-rewards']}>ClaimRewards</div>
            </div>
          </div>

          <hr />

          <div className={styles['bomb-btcb-content']}>
            <div className={styles['bomb-btcb']}>BSHARE BNB</div>
            <div className={styles['recommended-back']}>
              <div className={styles['recommended']}>Recommended</div>
            </div>
          </div>
          <hr />
          <div className={styles['card-content']}>
            <div>
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a-4']}>
                  Daily Returns
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a-4-b']}>
                  Your Stake
                </div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a-4-b']}>Earned</div>
              </div>
              <div className={styles['card-content-child1']}>
                <div className={styles['card-content-child-a']}>2%</div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>6.0000</div>
                &nbsp;&nbsp;
                <div className={styles['card-content-child-a']}>1660.4413</div>
              </div>
            </div>
            <div className={styles['card-content-2']}>
              <div className={styles['deposit']}>Deposit</div>
              <div className={styles['withdraw']}>Withdraw</div>
              <div className={styles['claim-rewards']}>ClaimRewards</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <br />
      <div className={styles['card-23']}>
        <Card className={styles['card-23-a']}>
          <CardContent>
            <div>
              <button className={styles['invest']}>Invest Now</button>
            </div>
            <div className={styles['button-b']}>
              <button className={styles['chat']}>Chat</button>
              <button className={styles['read']}>Invest Now</button>
            </div>
            <div className={styles['bomb-btcb-content']}>
              <div className={styles['bomb-btcb']}>Boardroom</div>
              <div className={styles['recommended-back']}>
                <div className={styles['recommended']}>Recommended</div>
              </div>
            </div>
          </CardContent>
        </Card>
        &nbsp;
        <Card className={styles['card-23-b']}>
          <CardContent>
            <div className={styles['latest']}>Latest News</div>
          </CardContent>
        </Card>
      </div>
      <br />
      <Card className={styles['card']}>
        <CardContent>
          <div>
            <div className={styles['card-3']}>
              <div className={styles['card-heading-3']}>Bonds</div>
              <div className={styles['card-content-3']}>
                BBOND can be purchased only on contraction periods, when TWAP of
                BOMB is below 1
              </div>
            </div>
            <div className={styles['card-2-3']}>
              <div>
                <div className={styles['card-current']}>
                  Current Price: (Bomb)^2
                </div>
                <div className={styles['card-current-bbond']}>
                  BBOND = 6.2872 BTCB
                </div>
              </div>
              <div>
                <div className={styles['card-current-2']}>
                  Available to redeem:
                </div>
                <div className={styles['card-current-redeem']}>456</div>
              </div>
              <div>
                <div className={styles['card-current-3']}>
                  <div>
                    <div className={styles['card-current-3-1']}>
                      Purchase BBond
                    </div>
                    <div className={styles['card-current-3-1']}>
                      Bomb is over peg
                    </div>
                  </div>

                  <div className={styles['card-current-3-2']}>
                    <div className={styles['purchase-1']}>Purchase</div>
                  </div>
                </div>
                <hr className={styles['card-hr-3']} />
                <div className={styles['card-current-3']}>
                  <div>
                    <div className={styles['card-current-3-1']}>
                      Redeem Bomb
                    </div>
                  </div>

                  <div className={styles['card-current-3-2']}>
                    <div className={styles['redeem-1']}>Redeem</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
      </Page>
    </Switch>
  );
};

export default InvestmentDashboard;
