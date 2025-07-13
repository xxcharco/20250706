import { useState } from 'react'
import { 
  Container, 
  Typography, 
  Box,
  Paper,
  Chip,
  Alert
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Calendar from './components/Calendar'

// テーマを作成（ピンク系）
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b9d',
    },
    secondary: {
      main: '#ffc1cc',
    },
  },
})

function App() {
  const [selectedDates, setSelectedDates] = useState([])

  const handleDateClick = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter(d => d !== date))
    } else {
      setSelectedDates([...selectedDates, date])
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          {/* タイトル */}
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            color="primary"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            生理周期カレンダー
          </Typography>
          
          {/* 説明文 */}
          <Typography 
            variant="body1" 
            align="center" 
            color="textSecondary"
            sx={{ mb: 4 }}
          >
            日付をクリックして生理日を記録しましょう
          </Typography>

          {/* 使い方の説明 */}
          <Alert severity="info" sx={{ mb: 3 }}>
            カレンダーの数字をクリックすると記録できます。もう一度クリックすると削除されます。
          </Alert>

          {/* カレンダーコンポーネント */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Calendar 
              selectedDates={selectedDates}
              onDateClick={handleDateClick}
            />
          </Paper>

          {/* 選択された日付を表示 */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              記録した日付
            </Typography>
            
            {selectedDates.length > 0 ? (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedDates.map(date => (
                  <Chip 
                    key={date} 
                    label={date}
                    color="primary"
                    variant="filled"
                    onDelete={() => handleDateClick(date)}
                  />
                ))}
              </Box>
            ) : (
              <Typography color="textSecondary">
                まだ記録がありません
              </Typography>
            )}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App