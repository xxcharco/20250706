import { 
    Box, 
    Typography, 
    Button, 
    Grid 
  } from '@mui/material'
  import { styled } from '@mui/material/styles'
  
  // カスタムスタイルのボタンコンポーネント
  const DateButton = styled(Button)(({ theme, selected }) => ({
    minWidth: '48px',
    height: '48px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: selected ? 'bold' : 'normal',
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.paper,
    color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
    border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.divider}`,
    '&:hover': {
      backgroundColor: selected 
        ? theme.palette.primary.dark 
        : theme.palette.action.hover,
    },
  }))
  
  function Calendar({ selectedDates, onDateClick }) {
    // 今月の日付を生成する関数
    const generateDates = () => {
      const dates = []
      for (let i = 1; i <= 31; i++) {
        dates.push(i)
      }
      return dates
    }
  
    const dates = generateDates()
  
    return (
      <Box>
        {/* カレンダーのタイトル */}
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          align="center"
          color="primary"
          sx={{ fontWeight: 'bold', mb: 3 }}
        >
          12月 2024
        </Typography>
  
        {/* 曜日のヘッダー */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
            <Grid item xs key={day}>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  py: 1,
                  fontWeight: 'bold',
                  color: 'text.secondary' 
                }}
              >
                {day}
              </Box>
            </Grid>
          ))}
        </Grid>
  
        {/* 日付のグリッド */}
        <Grid container spacing={1}>
          {dates.map(date => {
            const dateString = `2024-12-${date.toString().padStart(2, '0')}`
            const isSelected = selectedDates.includes(dateString)
            
            return (
              <Grid item xs key={date}>
                <DateButton
                  selected={isSelected}
                  onClick={() => onDateClick(dateString)}
                  fullWidth
                >
                  {date}
                </DateButton>
              </Grid>
            )
          })}
        </Grid>
  
        {/* 統計情報 */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            選択された日数: {selectedDates.length}日
          </Typography>
        </Box>
      </Box>
    )
  }
  
  export default Calendar