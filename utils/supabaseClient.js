import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tarcorveuhzqibgtioqk.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmNvcnZldWh6cWliZ3Rpb3FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Nzc0MzMzMSwiZXhwIjoxOTgzMzE5MzMxfQ.WTwJDO2D9-h3QMpSmshaNfOuL5fMV6ha9sbgQ_Vb04U'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)