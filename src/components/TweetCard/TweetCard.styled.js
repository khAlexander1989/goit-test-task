import styled from 'styled-components';
import bgImage from '../../images/bg-image.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px 20px;
  background-image: url(${bgImage}),
    linear-gradient(#471ca9 0%, #5736a3 69.1%, #4b2a99 100%);

  background-repeat: no-repeat;
  background-position: top 28px center, center;
  border-radius: 20px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
`;
export const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 66px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    transform: translateY(-50%);
    width: 380px;
    height: 8px;
    background-color: ${p => p.theme.colors.textPrimary};
    box-shadow: inset 0px 3.44px 2.58px #fbf8ff,
      0px 3.44px 3.44px rgba(0, 0, 0, 0.06), inset 0px -1.72px 3.44px #ae7be3;
  }
`;

export const AvatarContainer = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;

  border-radius: 85.92px;

  background-color: ${p => p.theme.colors.BG};

  box-shadow: 0 4.39px 3.29px #fbf8ff, 0 -2.2px 4.39px #ae7be3;
`;

export const AvatarFrame = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;

  border-radius: 85.92px;
  background-color: ${p => p.theme.colors.textPrimary};

  box-shadow: inset 0 3.29px 4.39px #fbf8ff, inset 0 -2.2px 4.39px #ae7be3;
`;
export const Avatar = styled.img`
  object-fit: cover;
`;

export const Typography = styled.p`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: 24px;
  color: ${p => p.theme.colors.textPrimary};

  :not(:first-of-type) {
    margin-top: 16px;
  }
`;
export const FollowBtn = styled.button`
  height: 50px;
  min-width: 196px;
  margin-top: 26px;

  /* BUTTON LABEL */
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: 22px;

  border-radius: 10.31px;

  color: ${p => p.theme.colors.textSecondary};
  background-color: ${p =>
    p.active ? p.theme.colors.buttonActive : p.theme.colors.buttonBG};

  box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);

  transition: box-shadow 250ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25),
      0 0 3px 3px ${p => p.theme.colors.hover};
  }
`;
