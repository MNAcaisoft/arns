import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activeLink: {
    backgroundColor: '#FFFFFF2A',
  },
  activeLinkMarker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    bottom: -2,
    position: 'absolute',
    top: -2,
    width: 7,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  link: {
    color: '#fff',
    fontSize: '16px',
  },
  linkWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 25,
    paddingVertical: 14,
    borderBottomWidth: 0,
  },
  versionContainer: {
    width: null,
    height: 15,
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#ccc',
    alignSelf: 'center',
    paddingRight: 10,
  },
});

export const gradientProperties = {
  colors: ['#2d1e42', '#0d4364'],
  end: { x: 0, y: 0 },
  start: { x: 0, y: 1 },
};

export default styles;
