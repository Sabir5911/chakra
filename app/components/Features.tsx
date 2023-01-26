import { HStack, Icon, Text, StackProps,Stack, Box, Flex } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  MoneyBackGuaranteeIcon,
  HastleFreeIcon,
  MonthlySubscriptionIcon,
} from './Icons';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign={["left"]} fontSize={"lg"} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    
    <Box maxW={"1024px"} m="auto" pt="38px" pb="32px" fontSize={'17px'}  fontFamily='sans-serif' display={'flex'}  >
        <Flex >
      <Stack px='48px' spacing={'20px'} direction={['column','column','row']}>
        <Feature icon={MoneyBackGuaranteeIcon} >
          30 days money back Guarantee
        </Feature>
        <Feature icon={HastleFreeIcon} >No setup fees 100% hastle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
        </Stack>
        </Flex>

    </Box>
    
  );
}