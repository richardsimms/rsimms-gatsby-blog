import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'

import Container from '../Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.headerBg};
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          
          <Link to="/" aria-label="go to homepage"><span className="visually-hidden">Richard, link back to rsimms.com homepage</span><svg width="112" height="30" viewBox="0 0 320 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M286.383 52.1348C283.712 49.5835 280.596 46.8102 271.359 48.9179C262.122 51.0255 251.327 61.1202 248.322 70.5492C248.084 71.296 247.89 72.0219 247.737 72.7261C243.687 76.4147 240.164 78.3851 238.171 77.2221C236.433 74.4868 237.402 73.2503 242.746 66.4289L242.746 66.428L242.747 66.4277C243.904 64.9502 245.267 63.2107 246.852 61.1372C255.476 49.8549 249.634 44.1649 240.731 43.9431C233.608 43.7656 224.074 51.93 220.031 56.1454C225.707 42.2791 214.034 45.2742 212.463 50.5989C212.367 50.9244 212.197 51.5692 211.963 52.4523L211.963 52.4525L211.963 52.4531C210.894 56.499 208.503 65.5441 205.886 71.8003C204.49 75.139 203.307 75.8349 202.257 76.4532C202.072 76.562 201.891 76.6683 201.714 76.7863C201.085 77.0632 200.506 77.2243 200.022 77.0903C196.016 75.981 202.582 61.56 206.477 55.0151C207.479 48.6922 199.688 48.8031 196.461 51.3545C193.79 48.8031 190.674 46.0298 181.437 48.1375C173.559 49.9349 164.549 57.541 160.203 65.5894L160.147 65.6471C152.022 73.9668 146.013 79.8871 143.453 76.4831C141.847 74.3468 145.7 69.5429 149.438 64.8828C151.655 62.118 153.833 59.4038 154.805 57.3273C156.363 53.9994 158.588 46.1644 149.574 44.1267C142.689 42.5702 135.903 47.72 129.844 52.3188L129.842 52.3199C129.138 52.854 128.444 53.3807 127.761 53.8885C130.667 47.2427 135.704 38.2991 140.525 29.7386L140.525 29.7384C145.119 21.5808 149.516 13.7711 151.689 8.629C156.14 -1.90934 144.455 -2.24213 140.448 6.74319C139.018 9.95136 134.622 19.0141 129.353 29.877L129.353 29.8772L129.353 29.8777L129.351 29.8812C123.58 41.7812 116.76 55.8407 111.644 66.73C109.621 67.349 106.831 69.2685 103.978 71.2317L103.978 71.2317C100.366 73.7166 96.6529 76.2716 94.2629 76.3484C87.3629 76.5703 89.2548 68.5833 93.8177 62.3713C98.0467 57.7122 101.622 57.3794 104.279 57.3794C108.467 57.3794 109.834 47.2218 103.601 47.8874C96.9238 49.7732 86.1454 54.765 81.2318 65.1924C80.0949 67.605 78.9743 70.1451 78.2535 72.6374C74.4982 76.0518 70.5415 77.8492 69.5995 75.9049C67.9769 72.1311 71.8199 64.4007 74.4373 59.1357C75.59 56.8171 76.5049 54.9766 76.6108 54.1626C77.3898 48.1724 68.7265 48.5655 66.7233 51.3388C64.1113 55.7089 61.2526 65.1806 59.7507 70.9105C59.656 70.9603 59.5491 71.0344 59.429 71.1349C59.13 71.3853 58.8343 71.6411 58.5372 71.8982C56.0697 74.0331 53.4962 76.2597 47.9708 76.2597C40.5691 76.2597 36.7305 66.2389 35.7289 61.7279C52.645 59.3983 76.6837 46.3086 72.3434 24.6772C66.3337 0.938224 38.3998 7.37215 32.1676 9.70169C26.2269 11.9222 7.5058 20.6837 2.67553 33.7735C-0.885752 43.4244 11.0223 45.4212 14.6949 35.8812C18.3675 26.3412 27.1595 20.5728 33.9482 17.6886C40.7369 14.8045 51.866 16.3575 55.0934 19.4635C58.3208 22.5696 62.6611 29.891 57.3192 40.3184C53.0456 48.6603 40.5885 53.2231 34.8385 54.2955C34.4441 53.4906 34.1279 52.2484 33.7807 50.8841L33.7807 50.884C32.9516 47.6267 31.9454 43.6733 29.274 43.3135C27.9014 43.1285 25.1118 43.6463 23.5982 46.3086C22.8234 47.6715 19.2114 52.7367 15.0402 58.5862L15.0402 58.5863L15.04 58.5865L15.0394 58.5873C9.02563 67.0208 1.84978 77.0839 0.338441 80.0313C-1.99866 90.6806 8.46263 87.0199 10.4659 84.5794C11.3573 83.4934 19.8142 70.1585 21.5949 66.9416C21.8735 66.4382 22.226 65.5651 22.549 64.7648L22.5491 64.7646L22.5492 64.7645C22.8566 64.0029 23.1374 63.3074 23.3026 63.059C23.503 62.7582 25.7397 62.4995 25.824 63.059C27.1595 71.9334 29.6079 82.6936 39.5127 85.7996C47.1867 88.2061 54.9233 83.3156 58.1331 80.3178C58.5023 84.88 61.4109 87.2198 64.9253 87.2198C68.9543 87.2198 74.2399 83.4403 76.7208 81.6664L76.7213 81.666L76.7275 81.6616L76.7276 81.6615C76.9864 81.4765 77.2144 81.3134 77.4072 81.179C77.5475 81.0811 77.7055 80.8773 77.8756 80.5889C78.4759 82.568 79.7693 84.343 82.0489 85.7799C88.8031 90.0371 99.8708 84.169 106.867 77.1012C105.884 79.3058 105.112 81.1102 104.613 82.3975C104.613 89.1642 111.735 87.5003 113.294 84.8379C113.562 84.379 113.999 83.5969 114.559 82.5957L114.559 82.5956L114.559 82.5955C117.247 77.7893 122.757 67.9345 125.981 64.5378C129.876 60.4334 140.448 52.5573 143.453 54.9978C145.101 56.3364 142.999 58.8098 140.104 62.2165C137.721 65.0207 134.801 68.4572 132.992 72.4138C128.985 81.1773 132.547 86.28 139.335 87.1675C144.766 87.8774 153.618 81.2882 157.364 77.7384L157.452 77.5738C157.993 82.5199 160.964 85.6453 164.409 86.4084C169.417 87.5177 179.656 84.6336 188.671 74.2061C186.556 79.198 189.338 86.7412 194.791 87.185C199.69 87.5835 205.037 84.4913 207.365 81.3655C208.823 79.6212 211.535 75.5623 214.901 69.3598C218.573 62.5931 232.273 52.8175 236.39 54.9251C238.752 56.1338 237.813 57.3358 235.285 60.5719C233.404 62.9788 230.645 66.5111 227.71 72.0084C221.255 84.0997 229.49 88.3151 236.724 86.9839C241.06 86.1862 245.035 83.5482 247.956 81.0414C249.095 84.4316 251.56 86.5747 254.332 87.1887C259.34 88.298 269.579 85.4138 278.593 74.9864C276.479 79.9782 279.261 87.5215 284.714 87.9652C290.167 88.4089 296.177 84.5264 297.958 81.0875C298.946 79.178 298.258 76.3508 296.177 75.9848C295.099 75.7951 293.888 76.4247 292.753 77.0153L292.752 77.0158C291.695 77.5651 290.703 78.0806 289.945 77.8706C285.938 76.7613 292.504 62.3404 296.4 55.7955C296.53 54.97 297.91 52.1788 300.364 47.2171L300.365 47.2141L300.366 47.2136C304.319 39.2175 311.059 25.5864 319.848 5.46441C320.85 1.36 316.844 -3.52092 309.165 3.68953C306.807 6.751 298.398 25.597 292.479 38.86L292.478 38.862L292.476 38.8672L292.473 38.8745C289.173 46.2691 286.649 51.9248 286.383 52.1348ZM279.372 62.7841C276.033 67.9237 268.354 77.8706 262.122 77.0941C255.89 75.9737 259.785 67.9978 262.122 64.2262C264.459 60.4546 273.251 53.466 279.372 62.7841ZM91.9258 33.5544C89.5466 37.518 84.0746 45.1884 79.6336 44.5895C75.1926 43.7257 77.9682 37.575 79.6336 34.6665C81.299 31.758 87.564 26.3688 91.9258 33.5544ZM189.45 62.0038C186.111 67.1435 178.432 77.0903 172.2 76.3138C165.967 75.1934 169.862 67.2175 172.2 63.4458C174.537 59.6742 183.329 52.6856 189.45 62.0038ZM309.832 87.2198C312.906 87.2198 315.397 84.7365 315.397 81.6733C315.397 78.61 312.906 76.1268 309.832 76.1268C306.759 76.1268 304.268 78.61 304.268 81.6733C304.268 84.7365 306.759 87.2198 309.832 87.2198Z" fill="#FCF7F5"/>
</svg></Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                text-decoration: underline;
                color: ${theme.colors.pink};

              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
