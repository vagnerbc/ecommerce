// Tema
import { borders, gradients, scroll, spacing } from './theme/theme'

// Components
export { Avatar, AvatarBadge, AvatarGroup } from './components/Avatar'

export { Brand } from './components/Brand'

export {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from './components/ModalDialog'

export {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  MenuGroup
} from './components/Menu'

export type {
  ModalContentProps,
  ModalProps,
  AccordionPanelProps,
  MenuButtonProps,
  RadioGroupProps
} from '@chakra-ui/react'

export {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from './components/Accordion'

export {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader
} from './components/Drawer'

export {
  Collapse,
  Fade,
  ScaleFade,
  Slide,
  SlideFade
} from './components/Transitions'

export { Tab, TabList, TabPanel, TabPanels, Tabs } from './components/Tabs'
export { Grid, GridItem } from './components/Grid'
export {
  Table,
  Tbody,
  Thead,
  Td,
  Tr,
  Th,
  TableContainer
} from './components/Table'
export { Paginator } from './components/Paginator'
export { QuantityPicker } from './components/QuantityPicker'
export { Button } from './components/Button'
export { Badge } from './components/Badge'
export { CloseButton } from './components/CloseButton'
export {
  BaseInput,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from './components/Input'
export { Checkbox, CheckboxGroup } from './components/Checkbox'
export { Divider } from './components/Divider'
export { Box } from './components/Box'
export { Flex } from './components/Flex'
export { Icon } from './components/Icon'
export { IconButton } from './components/IconButton'
export { SimpleGrid } from './components/SimpleGrid'
export { Center } from './components/Center'
export { Text } from './components/Text'
export { TextInfo } from './components/TextInfo'
export { Breadcrumb } from './components/Breadcrumb'
export { Tag, TagLabel, TagLeftIcon, TagRightIcon } from './components/Tag'
export { Radio, RadioGroup } from './components/Radio'
export { Stack } from './components/Stack'
export { useToast } from './components/Toast'
export { Image } from './components/Image'
export { Select } from './components/Select'
export { SelectSearch, SelectOption } from './components/SelectSearch'
export { Carrousel } from './components/Carrousel'
export { Container } from './components/Container'
export { Stat, StatLabel } from './components/Stat'
export { Skeleton, SkeletonText, SkeletonCircle } from './components/Skeleton'

export {
  CircularProgress,
  CircularProgressLabel
} from './components/CircularProgress'

export { Progress } from './components/Progress'

export {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from './components/Slider'

export { Switch } from './components/Switch'
export { Tooltip } from './components/Tooltip'
export { Step, Steps } from './components/Steps'
export { AlertDialog } from './components/AlertDialog'

export {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from './components/Alert'

export {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel
} from './components/Form'

export {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea
} from './components/Editable'

export { Link } from './components/Link'

export {
  List,
  ListIcon,
  ListItem,
  OrderedList,
  UnorderedList
} from './components/List'

// Providers
export { ThemeProvider } from './providers/ThemeProvider'

// Funções e hooks
export { getTheme } from './theme'
export {
  useSteps,
  useBreakpoint,
  useBreakpointValue,
  useMediaQuery,
  useOutsideClick,
  useClipboard,
  useDisclosure,
  useBoolean,
  useToken,
  useNumberInput,
  keyframes,
  useEditableControls
} from './hooks'

// tipagens
export type { ResponsiveValue } from '@chakra-ui/react'
export { ColorKeys, IconsName } from './types'

// Objetos de tema
export const theme = { borders, gradients, scroll, spacing }
