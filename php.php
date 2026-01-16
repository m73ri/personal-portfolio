<?php
// Simple page view counter with file locking
$path = __DIR__ . '/counter.txt';

// Initialize file if not exists
if (!file_exists($path)) { 
    file_put_contents($path, "0"); 
}

$fp = fopen($path, 'c+');      // c+ = create if not exist, open for read/write
if (flock($fp, LOCK_EX)) {     // Lock for exclusive write
    $val = (int)trim(stream_get_contents($fp));
    $val++;
    ftruncate($fp, 0);         // Clear file
    rewind($fp);               // Reset pointer
    fwrite($fp, (string)$val);
    fflush($fp);               // Flush output
    flock($fp, LOCK_UN);       // Unlock
} else {
    // If lock fails, just read (fallback)
    $val = (int)trim(file_get_contents($path));
}
fclose($fp);

// Output counting value for JS to fetch
echo $val;
?>