import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleSheet,
} from 'react-native';
import { styles } from '@/shared/components/ui/input/styles';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  const inputStyle = {
    ...styles.input,
    ...(leftIcon && styles.inputWithLeftIcon),
    ...(rightIcon && styles.inputWithRightIcon),
    ...(isFocused && styles.inputFocused),
    ...(error && styles.inputError),
    ...(style as object),
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        
        <TextInput
          style={inputStyle}
          placeholderTextColor="#8E8E93"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      
      {(error || helperText) && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
}; 