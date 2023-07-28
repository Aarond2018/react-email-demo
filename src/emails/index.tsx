import { Body, Button, Container, Head, Hr, Html, Img, Preview, Text} from '@react-email/components';

import { styles } from './styles/styles'

export const EmailTemplate = ({userName} : {userName: "string"}) => (
  <Html>
    <Head />
    <Preview>
      Testing component-based email templates in Next.js 13 application
    </Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Img
          src={"https://static.vecteezy.com/system/resources/previews/010/925/820/original/colorful-welcome-design-template-free-vector.jpg"}
          width="200"
          height="100"
          alt="Koala"
          style={styles.logo}
        />
        <Text style={styles.paragraph}>Hello {userName},</Text>
        <Text style={styles.paragraph}>
          Application that demo Creating and dispatching component-based email templates in Next.js 13 applications
        </Text>
          <Button pY={12} pX={12} style={styles.button} href="https://google.com">
            Verify Email
          </Button>
        <Hr style={styles.hr} />
        <Text style={styles.footer}>Copyright &copy;{new Date().getFullYear()}</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

